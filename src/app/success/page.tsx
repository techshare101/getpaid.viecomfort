import InvoiceForm from "@/components/InvoiceForm";

export default function Success() {
  return (
    <main className="max-w-xl mx-auto py-16 px-6">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">✅</div>
        <h2 className="text-2xl font-semibold mb-2">
          Payment successful!
        </h2>
        <p className="text-gray-600">
          Now add your invoice details to start chasing.
        </p>
      </div>

      <InvoiceForm />
      
      <p className="mt-6 text-center text-sm text-gray-500">
        After submitting, you can manage your invoices in the{" "}
        <a href="/dashboard" className="text-blue-600 hover:underline">dashboard</a>.
      </p>
    </main>
  );
}
