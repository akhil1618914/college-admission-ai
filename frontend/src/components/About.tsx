import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">About Us</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            RISE Krishna Sai Prakasam<br className="hidden sm:block" /> Group of Institutions
          </h2>
          <div className="mt-4 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              RISE Krishna Sai Prakasam Group of Institutions is a premier engineering and management education institution
              located in Ongole, Prakasam District, Andhra Pradesh. The institution is situated on NH-16 at Valluru,
              providing excellent connectivity for students across the region.
            </p>
            <p>
              Offering AICTE-approved undergraduate engineering programmes (B.Tech) across multiple specialisations,
              along with postgraduate programmes in Management (MBA) and Computer Applications (MCA), the institution
              is committed to providing quality technical education.
            </p>
            <p>
              The college follows the admission norms set by the Andhra Pradesh State Council of Higher Education (APSCHE)
              and admission is conducted through the AP EAPCET / AP ICET counselling process administered by the
              Convener, in addition to a management quota for eligible candidates.
            </p>
            <p className="text-sm text-slate-500 italic">
              For the most current information about rankings, accreditations, and achievements, please contact the institution directly or ask our AI Assistant.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🏛️', title: 'AICTE Approved', desc: 'All programmes are approved by the All India Council for Technical Education' },
              { icon: '📚', title: 'Multiple Disciplines', desc: 'B.Tech, MBA, and MCA programmes across engineering and management fields' },
              { icon: '📍', title: 'Strategic Location', desc: 'Situated on NH-16 at Valluru, Ongole in Prakasam District, Andhra Pradesh' },
              { icon: '🎯', title: 'Focused Admission', desc: 'Transparent admissions via AP EAPCET / AP ICET counselling and management quota' },
            ].map(item => (
              <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-slate-800 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
