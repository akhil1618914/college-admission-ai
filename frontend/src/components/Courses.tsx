import React from 'react'

const BTECH_COURSES = [
  { name: 'Computer Science and Engineering', short: 'CSE', intake: 300, color: 'blue' },
  { name: 'Electronics and Communication Engineering', short: 'ECE', intake: 240, color: 'indigo' },
  { name: 'CSE – Data Science', short: 'CSE-DS', intake: 120, color: 'violet' },
  { name: 'CSE – Artificial Intelligence & Machine Learning', short: 'CSE-AI&ML', intake: 60, color: 'purple' },
  { name: 'Electrical and Electronics Engineering', short: 'EEE', intake: 60, color: 'amber' },
  { name: 'Mechanical Engineering', short: 'MECH', intake: 60, color: 'orange' },
  { name: 'Civil Engineering', short: 'CIVIL', intake: 60, color: 'green' },
]

const PG_COURSES = [
  { name: 'Master of Business Administration', short: 'MBA', intake: 60, color: 'teal' },
  { name: 'Master of Computer Applications', short: 'MCA', intake: 120, color: 'cyan' },
]

type ColorKey = 'blue' | 'indigo' | 'violet' | 'purple' | 'amber' | 'orange' | 'green' | 'teal' | 'cyan'

const COLOR_MAP: Record<ColorKey, { bg: string; text: string; badge: string; bar: string }> = {
  blue:   { bg: 'bg-blue-50',   text: 'text-blue-700',   badge: 'bg-blue-100 text-blue-700',   bar: 'bg-blue-500' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', badge: 'bg-indigo-100 text-indigo-700', bar: 'bg-indigo-500' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-700', badge: 'bg-violet-100 text-violet-700', bar: 'bg-violet-500' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-700', bar: 'bg-purple-500' },
  amber:  { bg: 'bg-amber-50',  text: 'text-amber-700',  badge: 'bg-amber-100 text-amber-700',  bar: 'bg-amber-500' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-700', bar: 'bg-orange-500' },
  green:  { bg: 'bg-green-50',  text: 'text-green-700',  badge: 'bg-green-100 text-green-700',  bar: 'bg-green-500' },
  teal:   { bg: 'bg-teal-50',   text: 'text-teal-700',   badge: 'bg-teal-100 text-teal-700',   bar: 'bg-teal-500' },
  cyan:   { bg: 'bg-cyan-50',   text: 'text-cyan-700',   badge: 'bg-cyan-100 text-cyan-700',   bar: 'bg-cyan-500' },
}

function CourseCard({ name, short, intake, color }: { name: string; short: string; intake: number; color: ColorKey }) {
  const c = COLOR_MAP[color]
  const maxIntake = 300
  const pct = Math.round((intake / maxIntake) * 100)
  return (
    <div className={`${c.bg} border border-white rounded-xl p-5 hover:shadow-md transition-shadow`}>
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${c.badge}`}>{short}</span>
        <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Intake: {intake}</span>
      </div>
      <h3 className={`font-semibold text-sm leading-snug ${c.text} mb-3`}>{name}</h3>
      <div className="w-full bg-white rounded-full h-1.5 overflow-hidden">
        <div className={`${c.bar} h-1.5 rounded-full`} style={{ width: `${pct}%` }}></div>
      </div>
    </div>
  )
}

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Academic Programmes</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Courses Offered</h2>
          <div className="mt-4 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm">
            Intake figures reflect sanctioned seats. Actual availability may vary by academic year. Verify current seat availability with the admissions office.
          </p>
        </div>

        {/* B.Tech */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-sm font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-lg">B.Tech (4 Years)</span>
            <div className="h-px flex-1 bg-slate-200"></div>
            <span className="text-xs text-slate-400">AICTE Approved</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {BTECH_COURSES.map(c => (
              <CourseCard key={c.short} {...c} color={c.color as ColorKey} />
            ))}
          </div>
        </div>

        {/* PG */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-sm font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-lg">Postgraduate Programmes</span>
            <div className="h-px flex-1 bg-slate-200"></div>
            <span className="text-xs text-slate-400">AICTE Approved</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PG_COURSES.map(c => (
              <CourseCard key={c.short} {...c} color={c.color as ColorKey} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
