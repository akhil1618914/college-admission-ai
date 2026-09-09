import React, { useState } from 'react'

const FAQS = [
  {
    q: 'What entrance exam is required for B.Tech admission?',
    a: 'For Convener Quota (70% of seats), candidates must appear in AP EAPCET (Andhra Pradesh Engineering, Agriculture and Pharmacy Common Entrance Test). For Management Quota seats, the entrance exam requirement applies as per APSCHE norms — contact the institution directly for the current procedure.',
  },
  {
    q: 'What is the difference between Convener Quota and Management Quota?',
    a: '70% of seats are filled through centralised AP EAPCET / AP ICET counselling conducted by the Convener (APSCHE). These are allotted based on rank and category. The remaining 30% are Management Quota seats filled directly by the institution from eligible candidates.',
  },
  {
    q: 'Which B.Tech branches are offered at RISE KSP?',
    a: 'RISE KSP offers B.Tech in CSE (300 seats), ECE (240 seats), CSE-Data Science (120 seats), CSE-AI&ML (60 seats), EEE (60 seats), Mechanical Engineering (60 seats), and Civil Engineering (60 seats). Intake figures reflect sanctioned seats.',
  },
  {
    q: 'What are the PG programmes available?',
    a: 'RISE KSP offers MBA (60 seats) and MCA (120 seats) as postgraduate programmes. Admission is through AP ICET counselling for Convener Quota seats.',
  },
  {
    q: 'What documents are required at the time of admission?',
    a: 'You will need your 10th and 12th marks memos, entrance exam rank card, allotment order (for Convener Quota), study certificates, transfer certificate, caste and income certificates (if applicable), Aadhar card, and passport-size photographs. Confirm the final checklist with the admissions office.',
  },
  {
    q: 'Is Mathematics mandatory for MCA admission?',
    a: "Yes, as per APSCHE norms, Mathematics is generally required either at the Class 12 level or as a subject in the qualifying Bachelor's degree. Confirm the exact requirement with the admissions office for the current year.",
  },
  {
    q: 'How can I find out the current fee structure?',
    a: 'Fees are regulated by the Andhra Pradesh Fee Regulatory Committee (APFRC) and change each year. Contact the RISE KSP admissions office directly at +91 8790145555 or ask our AI Assistant for the most current available information.',
  },
  {
    q: 'Where is RISE Krishna Sai Prakasam Group of Institutions located?',
    a: 'The institution is located at NH-16, Valluru, Ongole – 523 272, Prakasam District, Andhra Pradesh.',
  },
  {
    q: 'Are scholarships available for students?',
    a: "Students from eligible categories (SC, ST, BC, EBC, Minority, etc.) may qualify for the Andhra Pradesh government Post-Matric Scholarship. Contact the institution's accounts or welfare office for guidance on applying.",
  },
  {
    q: 'How do I contact the admissions office?',
    a: 'You can reach the admissions office at +91 8790145555 (General Contact) or +91 8331938209 (Edu Verify). You may also use our AI Assistant for immediate answers to common queries.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-800 text-sm leading-snug">{q}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-slate-50 border-t border-slate-100">
          <p className="text-sm text-slate-600 leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQs() {
  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Common Questions</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Frequently Asked Questions</h2>
          <div className="mt-4 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 text-sm">Based on verified information. For questions not covered here, ask our AI Assistant.</p>
        </div>

        <div className="space-y-3">
          {FAQS.map(faq => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm mb-4">Still have questions?</p>
          <button
            onClick={() => document.querySelector('#ai-assistant')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm rounded-xl transition-colors"
          >
            <span>🤖</span> Ask AI Assistant
          </button>
        </div>
      </div>
    </section>
  )
}
