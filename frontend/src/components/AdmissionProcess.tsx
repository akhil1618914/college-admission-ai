import React from 'react'

const STEPS = [
  {
    num: '01',
    title: 'Appear in Entrance Exam',
    desc: 'Register and appear in AP EAPCET (for B.Tech) or AP ICET (for MBA / MCA). These state-level exams are conducted by APSCHE and are the primary route to Convener Quota seats.',
    icon: '📝',
  },
  {
    num: '02',
    title: 'Check Rank & Eligibility',
    desc: 'Obtain your rank card from the official AP EAPCET / AP ICET results portal. Verify that your rank and academic qualifications meet the eligibility criteria.',
    icon: '🔍',
  },
  {
    num: '03',
    title: 'Convener Counselling (70% Seats)',
    desc: 'Register for web counselling on the official APSCHE / Convener portal. Exercise college and branch options. Seat allotment is done centrally based on rank, category, and availability.',
    icon: '🖥️',
  },
  {
    num: '04',
    title: 'Report to College (Convener Allotment)',
    desc: 'If you are allotted a seat at RISE KSP, report to the institution within the stipulated time with all required documents and pay the tuition fee to confirm your admission.',
    icon: '🏛️',
  },
  {
    num: '05',
    title: 'Management Quota (30% Seats)',
    desc: 'If you are seeking admission through the Management Quota (not allotted via Convener counselling), contact the institution directly. Eligibility for the same entrance exam still applies.',
    icon: '📋',
  },
  {
    num: '06',
    title: 'Document Verification & Enrolment',
    desc: 'Submit all original documents for verification. Pay the prescribed fee as per the fee structure. Complete enrolment formalities to begin your academic journey.',
    icon: '✅',
  },
]

export default function AdmissionProcess() {
  return (
    <section id="admission-process" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">How to Apply</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Admission Process</h2>
          <div className="mt-4 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm">
            Admissions at RISE KSP are conducted in accordance with APSCHE norms. The process below outlines the standard flow for the current admission cycle.
          </p>
        </div>

        {/* Quota Banner */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <div className="bg-blue-700 rounded-2xl p-6 text-white">
            <div className="text-4xl font-extrabold mb-1">70%</div>
            <div className="text-lg font-semibold mb-2">Convener Quota</div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Seats allotted through AP EAPCET / AP ICET web counselling by the Convener, APSCHE. Centralised, rank-based, and transparent.
            </p>
          </div>
          <div className="bg-white border-2 border-blue-200 rounded-2xl p-6">
            <div className="text-4xl font-extrabold text-blue-700 mb-1">30%</div>
            <div className="text-lg font-semibold text-slate-800 mb-2">Management Quota</div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Seats filled directly by the institution from eligible candidates. Contact the admissions office for the current year's procedure and fee.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-8 right-8 h-0.5 bg-blue-100"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map(step => (
              <div key={step.num} className="relative bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-700 text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                    {step.num}
                  </div>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-2 text-sm leading-snug">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5 flex gap-3">
          <span className="text-xl flex-shrink-0">ℹ️</span>
          <p className="text-sm text-blue-800 leading-relaxed">
            Exact counselling dates, rank cut-offs, and fee payment deadlines change every year.
            Check the official APSCHE website and the RISE KSP admissions office for the current academic year's schedule.
          </p>
        </div>
      </div>
    </section>
  )
}
