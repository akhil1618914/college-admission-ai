import React from 'react'

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-base">R</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">RISE Krishna Sai</div>
                <div className="text-slate-400 text-xs leading-tight">Group of Institutions</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              AICTE-approved engineering and management programmes in Ongole, Prakasam District, Andhra Pradesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                ['Home', '#home'],
                ['About', '#about'],
                ['Courses', '#courses'],
                ['Eligibility', '#eligibility'],
                ['Admission Process', '#admission-process'],
              ].map(([label, href]) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Information</h4>
            <ul className="space-y-2">
              {[
                ['Fee Structure', '#fees'],
                ['Documents', '#documents'],
                ['FAQs', '#faqs'],
                ['Contact', '#contact'],
                ['AI Assistant', '#ai-assistant'],
              ].map(([label, href]) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">📞</span>
                <div>
                  <div className="text-white">+91 8790145555</div>
                  <div>General Contact</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">✅</span>
                <div>
                  <div className="text-white">+91 8331938209</div>
                  <div>Edu Verify</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">📍</span>
                <div>NH-16, Valluru, Ongole – 523 272<br />Prakasam District, AP</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} RISE Krishna Sai Prakasam Group of Institutions. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            AI Assistant powered by
            <span className="text-blue-400 font-medium">IBM watsonx Orchestrate</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
