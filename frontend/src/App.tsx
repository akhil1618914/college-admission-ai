import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Eligibility from './components/Eligibility'
import AdmissionProcess from './components/AdmissionProcess'
import FeeStructure from './components/FeeStructure'
import Documents from './components/Documents'
import ImportantInfo from './components/ImportantInfo'
import FAQs from './components/FAQs'
import AIAssistant from './components/AIAssistant'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Eligibility />
        <AdmissionProcess />
        <FeeStructure />
        <Documents />
        <ImportantInfo />
        <FAQs />
        <AIAssistant />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
