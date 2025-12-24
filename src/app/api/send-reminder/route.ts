import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  let invoiceId: string | null = null;
  
  try {
    const body = await request.json();
    invoiceId = body.invoice_id;
  } catch {
    // No body provided, will fetch latest pending invoice
  }

  let invoice;

  if (invoiceId) {
    const { data, error } = await supabase
      .from("invoices")
      .select("*")
      .eq("id", invoiceId)
      .single();
    
    if (error || !data) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }
    invoice = data;
  } else {
    const { data: invoices, error } = await supabase
      .from("invoices")
      .select("*")
      .eq("status", "pending")
      .order("created_at", { ascending: false })
      .limit(1);

    if (error || !invoices || invoices.length === 0) {
      return NextResponse.json({ error: "No pending invoice found" }, { status: 404 });
    }
    invoice = invoices[0];
  }

  const emailBody = `Hi ${invoice.client_name},

Just a quick reminder that invoice ${invoice.invoice_number} for ${invoice.amount} was due on ${invoice.due_date}.

Please let me know if you need anything from me.

Thanks!
${invoice.sender_name}`;

  const { error: emailError } = await resend.emails.send({
    from: "GetPaid <onboarding@resend.dev>",
    to: invoice.client_email,
    subject: "Friendly reminder — invoice due",
    text: emailBody,
  });

  if (emailError) {
    return NextResponse.json({ error: emailError.message }, { status: 500 });
  }

  await supabase
    .from("invoices")
    .update({ last_reminder_sent: new Date().toISOString() })
    .eq("id", invoice.id);

  return NextResponse.json({ success: true, sent_to: invoice.client_email });
}
