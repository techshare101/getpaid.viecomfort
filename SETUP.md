# GetPaid Setup Guide

## What's Already Done ✅

- [x] Supabase project created: `getpaid.viecomfort`
- [x] Database schema deployed (invoices table)
- [x] Landing page with $15 CTA
- [x] Invoice form
- [x] Dashboard with Mark as Paid + Send Reminder
- [x] All API routes

## What You Need to Do (3 Steps)

### Step 1: Get Supabase Service Role Key

1. Go to: https://supabase.com/dashboard/project/zwcarcmwmjekudhcqgva/settings/api
2. Copy the **service_role** key (under "Project API keys")
3. Paste it in `.env.local` as `SUPABASE_SERVICE_ROLE_KEY`

### Step 2: Create Stripe Product

1. Go to: https://dashboard.stripe.com/test/products
2. Click **+ Add product**
3. Name: "Invoice Chaser - One Invoice"
4. Price: $15 (one-time)
5. Click **Save product**
6. Copy the **Price ID** (starts with `price_`)
7. Go to: https://dashboard.stripe.com/test/apikeys
8. Copy your **Secret key** (starts with `sk_test_`)
9. Paste both in `.env.local`:
   - `STRIPE_SECRET_KEY=sk_test_...`
   - `STRIPE_PRICE_ID=price_...`

### Step 3: Get Resend API Key

1. Go to: https://resend.com/api-keys
2. Create a new API key
3. Copy it and paste in `.env.local` as `RESEND_API_KEY`

## Your .env.local Should Look Like:

```
STRIPE_SECRET_KEY=sk_test_your_actual_key
STRIPE_PRICE_ID=price_your_actual_price_id

NEXT_PUBLIC_SUPABASE_URL=https://zwcarcmwmjekudhcqgva.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Y2FyY213bWpla3VkaGNxZ3ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1NDc4NzgsImV4cCI6MjA4MjEyMzg3OH0.QAkC2IFXhI36dV3T90KAcISctKEiRlslWY1Q5kaqhyw
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

RESEND_API_KEY=re_your_actual_key

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Test the App

```bash
npm run dev
```

Then:
1. Go to http://localhost:3000
2. Click "Chase One Invoice — $15"
3. Complete Stripe checkout (use test card: 4242 4242 4242 4242)
4. Fill in invoice details
5. Check dashboard at /dashboard
6. Verify email was sent (check Resend dashboard)

## App Routes

- `/` - Landing page
- `/api/stripe/checkout` - Redirects to Stripe
- `/success` - Invoice form (after payment)
- `/dashboard` - View and manage invoices
