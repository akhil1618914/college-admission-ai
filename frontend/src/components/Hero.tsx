import React from 'react'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-400 rounded-full opacity-10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm text-blue-200 font-medium">Powered by IBM watsonx AI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              AI College
              <span className="block text-blue-300">Admission</span>
              <span className="block">Assistant</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-lg">
              Get instant, accurate admission guidance for RISE Krishna Sai Prakasam Group of Institutions.
              Our AI-powered assistant answers your questions about courses, eligibility, fees, and the admission process — 24 × 7.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('#ai-assistant')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-800 font-bold text-base rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                <span className="text-xl">🤖</span>
                Ask AI Assistant
              </button>
              <button
                onClick={() => scrollTo('#courses')}
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/60 text-white font-semibold text-base rounded-xl hover:bg-white/10 transition-colors"
              >
                Explore Courses
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            {/* Quick stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: '4+', label: 'Decades of Excellence' },
                { value: '9', label: 'Programs Offered' },
                { value: '1000+', label: 'Seats Available' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-xs text-blue-200 mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual card */}
          <div className="hidden lg:flex justify-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-full max-w-md shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-400/30 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-tight">RISE KSP</div>
                  <div className="text-blue-200 text-sm">Group of Institutions</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { icon: '📍', text: 'NH-16, Valluru, Ongole – 523 272' },
                  { icon: '📞', text: '+91 8790145555' },
                  { icon: '🏛️', text: 'AICTE Approved Programs' },
                  { icon: '🤝', text: 'JNTU-K Affiliated' },
                ].map(item => (
                  <div key={item.text} className="flex items-start gap-3 text-sm text-blue-100">
                    <span className="text-base mt-0.5">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-blue-200 text-xs mb-2 font-medium uppercase tracking-wide">AI Assistant Available</p>
                <p className="text-white text-sm">Ask about courses, eligibility, fees, documents, and more — instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  )
}
