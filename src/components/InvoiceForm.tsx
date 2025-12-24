"use client";

import { useState } from "react";

export default function InvoiceForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    await fetch("/api/create-invoice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    await fetch("/api/send-reminder", { method: "POST" });

    setLoading(false);
    window.location.href = "/dashboard";
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="client_name"
        placeholder="Client name"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
      <input
        name="client_email"
        type="email"
        placeholder="Client email"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
      <input
        name="invoice_number"
        placeholder="Invoice #"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
      <input
        name="amount"
        placeholder="Amount"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
      <input
        type="date"
        name="due_date"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
      <input
        name="sender_name"
        placeholder="Your name"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Reminder"}
      </button>
    </form>
  );
}
