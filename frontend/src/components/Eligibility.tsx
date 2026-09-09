import React from 'react'

function EligCard({ title, icon, items }: { title: string; icon: string; items: { label: string; value: string }[] }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-blue-700 px-6 py-4 flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-white font-bold text-lg">{title}</h3>
      </div>
      <div className="p-6 space-y-4">
        {items.map(item => (
          <div key={item.label} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide sm:w-40 flex-shrink-0 pt-0.5">{item.label}</span>
            <span className="text-sm text-slate-700 leading-relaxed">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Eligibility() {
  return (
    <section id="eligibility" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Admission Eligibility</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Who Can Apply?</h2>
          <div className="mt-4 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm">
            Eligibility criteria are governed by APSCHE norms. Always verify the latest requirements with the official admissions office before applying.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <EligCard
            title="B.Tech"
            icon="⚙️"
            items={[
              { label: 'Qualifying Exam', value: '10+2 / Intermediate (or equivalent) with Mathematics, Physics, and Chemistry (or relevant subjects)' },
              { label: 'Entrance Test', value: 'AP EAPCET (formerly AP EAMCET) — mandatory for Convener Quota admissions in Andhra Pradesh' },
              { label: 'Convener Quota', value: '70% of seats — allotted through AP EAPCET counselling conducted by APSCHE / Convener' },
              { label: 'Management Quota', value: '30% of seats — filled directly by the institution based on eligibility criteria' },
              { label: 'NRI / PIO Quota', value: 'As per APSCHE norms. Contact the admissions office for details.' },
            ]}
          />
          <EligCard
            title="MBA"
            icon="💼"
            items={[
              { label: 'Qualifying Exam', value: "Any Bachelor's degree (10+2+3 pattern) from a recognised university" },
              { label: 'Entrance Test', value: 'AP ICET — mandatory for Convener Quota admissions' },
              { label: 'Convener Quota', value: '70% of seats — through AP ICET counselling' },
              { label: 'Management Quota', value: '30% of seats — filled directly by the institution' },
              { label: 'Note', value: 'Specific percentile / rank requirements may apply as per APSCHE norms for the admission year.' },
            ]}
          />
          <EligCard
            title="MCA"
            icon="💻"
            items={[
              { label: 'Qualifying Exam', value: "Bachelor's degree with Mathematics at 10+2 or graduation level, from a recognised university" },
              { label: 'Entrance Test', value: 'AP ICET — mandatory for Convener Quota admissions' },
              { label: 'Convener Quota', value: '70% of seats — through AP ICET counselling' },
              { label: 'Management Quota', value: '30% of seats — filled directly by the institution' },
              { label: 'Note', value: 'Confirm Mathematics requirement and rank cut-offs with the admissions office for the current year.' },
            ]}
          />
        </div>

        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3">
          <span className="text-xl flex-shrink-0">⚠️</span>
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Disclaimer:</strong> Eligibility conditions are updated each academic year by APSCHE. The information above reflects the general pattern.
            Always consult the official APSCHE website and the college admissions office to confirm requirements for the current admission cycle.
          </p>
        </div>
      </div>
    </section>
  )
}
