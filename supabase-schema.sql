-- Phase I Schema: Minimal persistence for invoice tracking
-- Run this in your Supabase SQL Editor

CREATE TABLE invoices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  invoice_number TEXT NOT NULL,
  amount TEXT NOT NULL,
  due_date DATE NOT NULL,
  sender_name TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid')),
  last_reminder_sent TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (optional for Phase I, but good practice)
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

-- Allow all operations for now (tighten in Phase II)
CREATE POLICY "Allow all" ON invoices FOR ALL USING (true);
