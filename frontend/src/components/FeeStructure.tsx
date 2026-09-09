import React from 'react'

export default function FeeStructure() {
  return (
    <section id="fees" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Financial Information</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Fee Structure</h2>
          <div className="mt-4 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Important notice */}
        <div className="max-w-3xl mx-auto mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
          <span className="text-3xl flex-shrink-0">⚠️</span>
          <div>
            <h3 className="font-bold text-amber-800 mb-2">Fee information requires direct verification</h3>
            <p className="text-sm text-amber-700 leading-relaxed">
              Tuition fees for Andhra Pradesh engineering and management colleges are regulated by the Andhra Pradesh Fee Regulatory Committee (APFRC)
              and are revised periodically. Fees vary by programme, quota (Convener vs Management), and academic year.
              We do not publish specific fee amounts here to avoid providing outdated information.
            </p>
          </div>
        </div>

        {/* What to expect */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {[
            {
              icon: '📊',
              title: 'Regulated Fees',
              desc: 'Tuition fees are fixed by the APFRC. Convener Quota and Management Quota fee structures are different and published annually.',
            },
            {
              icon: '📅',
              title: 'Annual Fee Payment',
              desc: 'Fees are generally paid on a semester or annual basis. The exact schedule and due dates are communicated at the time of admission.',
            },
            {
              icon: '🏦',
              title: 'Scholarships & Aid',
              desc: 'Students from SC, ST, BC, EBC, and other categories may be eligible for state government scholarships (Post-Matric Scholarship scheme). Contact the admissions office for guidance.',
            },
            {
              icon: '💳',
              title: 'Payment Modes',
              desc: 'Fee payment modes (online / demand draft / direct) are confirmed at the time of admission. Contact the institution for the accepted payment methods.',
            },
            {
              icon: '📋',
              title: 'Other Charges',
              desc: 'In addition to tuition fees, there may be charges for examination, transport, hostel, library, and lab facilities. These are communicated during the admission process.',
            },
            {
              icon: '📞',
              title: 'Get Accurate Fees',
              desc: 'For the exact, current fee structure, contact the RISE KSP admissions office at +91 8790145555, or ask our AI Assistant for the latest available information.',
            },
          ].map(item => (
            <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:border-blue-200 transition-colors">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-slate-800 text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-600 text-sm mb-4">Need precise fee details for your programme?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => document.querySelector('#ai-assistant')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              <span>🤖</span> Ask AI Assistant
            </button>
            <a
              href="tel:+918790145555"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-medium rounded-lg transition-colors"
            >
              <span>📞</span> Call Admissions Office
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
