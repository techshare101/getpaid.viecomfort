"use client";

import { useEffect, useState } from "react";

interface Invoice {
  id: string;
  client_name: string;
  client_email: string;
  invoice_number: string;
  amount: string;
  due_date: string;
  sender_name: string;
  status: string;
  last_reminder_sent: string | null;
  created_at: string;
}

export default function Dashboard() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInvoices();
  }, []);

  async function fetchInvoices() {
    const res = await fetch("/api/invoices");
    const data = await res.json();
    setInvoices(data.invoices || []);
    setLoading(false);
  }

  async function markAsPaid(invoiceId: string) {
    await fetch("/api/mark-paid", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ invoice_id: invoiceId }),
    });
    fetchInvoices();
  }

  async function sendReminder(invoiceId: string) {
    await fetch("/api/send-reminder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ invoice_id: invoiceId }),
    });
    alert("Reminder sent!");
    fetchInvoices();
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Invoices</h1>
          <a
            href="/success"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            + Add Invoice
          </a>
        </div>

        {invoices.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
            <p className="text-gray-500 mb-4">No invoices yet.</p>
            <a
              href="/success"
              className="text-blue-600 hover:underline"
            >
              Add your first invoice →
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className={`bg-white rounded-xl p-6 border ${
                  invoice.status === "paid"
                    ? "border-green-200 bg-green-50"
                    : "border-gray-100"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {invoice.client_name}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          invoice.status === "paid"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {invoice.status === "paid" ? "Paid" : "Pending"}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{invoice.client_email}</p>
                    <div className="mt-3 flex gap-6 text-sm text-gray-500">
                      <span>Invoice #{invoice.invoice_number}</span>
                      <span className="font-medium text-gray-900">{invoice.amount}</span>
                      <span>Due: {new Date(invoice.due_date).toLocaleDateString()}</span>
                    </div>
                    {invoice.last_reminder_sent && (
                      <p className="mt-2 text-xs text-gray-400">
                        Last reminder: {new Date(invoice.last_reminder_sent).toLocaleString()}
                      </p>
                    )}
                  </div>

                  {invoice.status !== "paid" && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => sendReminder(invoice.id)}
                        className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Send Reminder
                      </button>
                      <button
                        onClick={() => markAsPaid(invoice.id)}
                        className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Mark Paid
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
