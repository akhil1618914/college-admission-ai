import React from 'react'

export default function ImportantInfo() {
  return (
    <section className="py-16 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-blue-300 uppercase tracking-widest mb-2">Stay Informed</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Important Admission Information</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: '📅',
              title: 'Deadlines Change Each Year',
              desc: 'AP EAPCET / AP ICET exam dates, registration deadlines, and counselling schedules are announced annually by APSCHE. Do not rely on previous-year dates.',
            },
            {
              icon: '🔄',
              title: 'Verify Before Applying',
              desc: 'Seat availability, cut-off ranks, and fee structures are revised every academic year. Always check the official APSCHE website and the college for the current year.',
            },
            {
              icon: '📢',
              title: 'Official Sources Only',
              desc: 'Rely only on the official APSCHE portal, Convener notifications, and direct communication from the RISE KSP admissions office for authoritative information.',
            },
            {
              icon: '🤖',
              title: 'Ask Our AI Assistant',
              desc: 'Our IBM watsonx-powered AI assistant is trained on RISE KSP admission information. Ask it anything about courses, eligibility, documents, or the admission process.',
            },
          ].map(item => (
            <div key={item.title} className="bg-white/10 border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-white font-bold text-sm mb-2 leading-snug">{item.title}</h3>
              <p className="text-blue-200 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
