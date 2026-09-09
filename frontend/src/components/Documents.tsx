import React from 'react'

const BTECH_DOCS = [
  'Original SSC (Class 10) Marks Memo and Certificate',
  'Original Intermediate (Class 12) Marks Memo and Certificate (or equivalent)',
  'AP EAPCET Hall Ticket and Rank Card',
  'AP EAPCET Seat Allotment Order (for Convener Quota)',
  'Study Certificates from Classes 6 to Intermediate',
  'Transfer Certificate (TC) from the last institution attended',
  'Migration Certificate (if applicable)',
  'Caste Certificate (SC / ST / BC / EBC / OC — as applicable, issued by competent authority)',
  'Income Certificate (for fee reimbursement / scholarship eligibility)',
  'Aadhar Card (original and photocopy)',
  'Passport-size photographs (recent, as required)',
  'Medical Fitness Certificate (from a registered medical officer, if required)',
]

const MBA_MCA_DOCS = [
  'Original Bachelor\'s Degree Certificate and Marks Memos (all semesters / years)',
  'AP ICET Hall Ticket and Rank Card',
  'AP ICET Seat Allotment Order (for Convener Quota)',
  'Transfer Certificate (TC) and Migration Certificate from the Graduation institution',
  'Caste Certificate (as applicable)',
  'Income Certificate (for scholarship eligibility)',
  'Aadhar Card (original and photocopy)',
  'Passport-size photographs (recent, as required)',
]

export default function Documents() {
  return (
    <section id="documents" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Documentation</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Required Documents</h2>
          <div className="mt-4 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm">
            Ensure all documents are arranged before reporting to the college. Originals are required for verification. Photocopies will be retained.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* B.Tech */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-blue-700 px-6 py-4 flex items-center gap-3">
              <span className="text-2xl">⚙️</span>
              <h3 className="text-white font-bold text-lg">B.Tech Admissions</h3>
            </div>
            <ul className="p-6 space-y-3">
              {BTECH_DOCS.map((doc, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* MBA / MCA */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-indigo-700 px-6 py-4 flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              <h3 className="text-white font-bold text-lg">MBA / MCA Admissions</h3>
            </div>
            <ul className="p-6 space-y-3">
              {MBA_MCA_DOCS.map((doc, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{doc}</span>
                </li>
              ))}
            </ul>
            <div className="px-6 pb-6">
              <div className="bg-indigo-50 rounded-xl p-4 text-xs text-indigo-800 leading-relaxed">
                <strong>Note:</strong> For MCA, ensure your Bachelor's degree transcript confirms Mathematics as a subject at Class 12 or graduation level, as required by APSCHE norms.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3">
          <span className="text-xl flex-shrink-0">📌</span>
          <p className="text-sm text-amber-800 leading-relaxed">
            Document requirements may be updated by APSCHE each admission year. Always confirm the final checklist with the RISE KSP admissions office
            or the official counselling portal before reporting.
          </p>
        </div>
      </div>
    </section>
  )
}
