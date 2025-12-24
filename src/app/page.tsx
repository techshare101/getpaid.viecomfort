export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Stop Chasing Invoices.<br />
            <span className="text-blue-600">Get Paid Faster.</span> Automatically.
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Invoice Chaser sends smart, polite payment reminders for you — so freelancers, agencies, and small businesses get paid on time without awkward follow-ups.
          </p>

          <a
            href="/api/stripe/checkout"
            className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Chase One Invoice — $15
          </a>

          <p className="mt-4 text-sm text-gray-500">
            One invoice · No subscription · Takes 2 minutes
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Used by freelancers, agencies & SMBs
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Avg. payment time ↓ 42%
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Works with Stripe & invoicing tools
            </span>
          </div>
        </div>
      </section>

      {/* PAIN → SOLUTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Late payments hurt cash flow — <span className="text-red-500">not your work.</span>
          </h2>

          <div className="text-lg text-gray-600 space-y-4 mb-10">
            <p>You did the work.</p>
            <p>You sent the invoice.</p>
            <p>Now you're stuck waiting — wondering if you should follow up <em>again</em>.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-red-100">
              <span className="text-red-500 text-xl">✗</span>
              <span className="text-gray-700">Clients "forget" to pay</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-red-100">
              <span className="text-red-500 text-xl">✗</span>
              <span className="text-gray-700">You hate sending reminders</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-red-100">
              <span className="text-red-500 text-xl">✗</span>
              <span className="text-gray-700">Payments drag 30–60 days late</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-red-100">
              <span className="text-red-500 text-xl">✗</span>
              <span className="text-gray-700">Cash flow stress every month</span>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-2xl text-center">
            <p className="text-xl md:text-2xl font-medium">
              Invoice Chaser handles follow-ups automatically — professional, polite, and perfectly timed.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            How It Works
          </h2>
          <p className="text-gray-600 text-center mb-12">Three steps. Zero awkwardness.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Add your invoices</h3>
              <p className="text-gray-600">Upload invoices or connect your billing tool in seconds.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart reminders go out</h3>
              <p className="text-gray-600">Friendly nudges → firm follow-ups → escalation if needed. You control tone & timing.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">You get paid</h3>
              <p className="text-gray-600">Payments are tracked automatically. No spreadsheets. No stress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Invoice Chaser?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Paid Faster</h3>
              <p className="text-gray-600">Shorten payment cycles by days — sometimes weeks.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">😌</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Awkward Follow-Ups</h3>
              <p className="text-gray-600">We handle reminders so you don't have to chase clients.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictable Cash Flow</h3>
              <p className="text-gray-600">Know when money is coming in. Plan with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Built for people who do great work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Freelancers</h3>
              <p className="text-gray-600">Spend time creating — not chasing invoices.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Agencies</h3>
              <p className="text-gray-600">Automate follow-ups across multiple clients at scale.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🏪</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Small Businesses</h3>
              <p className="text-gray-600">Improve cash flow without hiring admin staff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            People like you are getting paid faster
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-700 mb-4 italic">"I used to wait 45 days to get paid. Now most clients pay in under two weeks."</p>
              <p className="text-sm text-gray-500 font-medium">— Freelance Designer</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-700 mb-4 italic">"Invoice Chaser paid for itself in the first month."</p>
              <p className="text-sm text-gray-500 font-medium">— Agency Owner</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-700 mb-4 italic">"Finally, predictable cash flow."</p>
              <p className="text-sm text-gray-500 font-medium">— Small Business Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            You already did the work.<br />
            Now get paid for it.
          </h2>

          <a
            href="/api/stripe/checkout"
            className="inline-block bg-white text-blue-600 text-lg font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-0.5"
          >
            Chase One Invoice — $15
          </a>

          <p className="mt-4 text-blue-100 text-sm">
            One invoice · No subscription · Takes 2 minutes
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 Invoice Chaser. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
