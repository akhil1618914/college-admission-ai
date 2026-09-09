import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Contact Us</h2>
          <div className="mt-4 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* General Contact */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">📞</div>
            <h3 className="font-bold text-slate-800 mb-1">General Contact</h3>
            <p className="text-xs text-slate-400 mb-3">Admissions & General Enquiries</p>
            <a
              href="tel:+918790145555"
              className="text-blue-700 font-semibold text-lg hover:text-blue-800 transition-colors"
            >
              +91 8790145555
            </a>
          </div>

          {/* Edu Verify */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-4">✅</div>
            <h3 className="font-bold text-slate-800 mb-1">Edu Verify</h3>
            <p className="text-xs text-slate-400 mb-3">Document & Education Verification</p>
            <a
              href="tel:+918331938209"
              className="text-green-700 font-semibold text-lg hover:text-green-800 transition-colors"
            >
              +91 8331938209
            </a>
          </div>

          {/* Location */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-4">📍</div>
            <h3 className="font-bold text-slate-800 mb-1">Campus Address</h3>
            <p className="text-xs text-slate-400 mb-3">Find Us On Map</p>
            <address className="not-italic text-slate-700 text-sm leading-relaxed">
              NH-16, Valluru,<br />
              Ongole – 523 272,<br />
              Prakasam District,<br />
              Andhra Pradesh, India
            </address>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-slate-100 flex items-center gap-2">
            <span className="text-base">🗺️</span>
            <span className="text-sm font-semibold text-slate-700">Campus Location — NH-16, Valluru, Ongole</span>
          </div>
          <div className="bg-slate-100 h-56 flex flex-col items-center justify-center gap-3">
            <span className="text-4xl">📍</span>
            <p className="text-sm text-slate-500 text-center px-4">
              RISE Krishna Sai Prakasam Group of Institutions<br />
              NH-16, Valluru, Ongole – 523 272, Andhra Pradesh
            </p>
            <a
              href="https://maps.google.com/?q=RISE+Krishna+Sai+Prakasam+Group+of+Institutions+Ongole"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
