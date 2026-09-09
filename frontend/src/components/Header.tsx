import React, { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Eligibility', href: '#eligibility' },
  { label: 'Admission Process', href: '#admission-process' },
  { label: 'Fees', href: '#fees' },
  { label: 'Documents', href: '#documents' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo / Institution Name */}
          <button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-3 text-left min-w-0"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">R</span>
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold text-blue-800 leading-tight truncate hidden sm:block">
                RISE Krishna Sai Prakasam
              </div>
              <div className="text-xs text-slate-500 leading-tight hidden sm:block">
                Group of Institutions
              </div>
              <div className="text-sm font-bold text-blue-800 leading-tight sm:hidden">
                RISE KSP
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm text-slate-600 hover:text-blue-700 font-medium rounded-md hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNav('#ai-assistant')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              <span className="text-base leading-none">🤖</span>
              Ask AI Assistant
            </button>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-md text-slate-500 hover:text-blue-700 hover:bg-blue-50 transition-colors"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-3 py-2 text-sm text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-100 mt-1">
              <button
                onClick={() => handleNav('#ai-assistant')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                <span>🤖</span> Ask AI Assistant
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
