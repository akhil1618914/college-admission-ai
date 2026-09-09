import React from 'react'

export default function AIAssistant() {
  return (
    <section id="ai-assistant" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Powered by IBM watsonx Orchestrate</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">AI Admission Assistant</h2>
          <div className="mt-4 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Ask our AI assistant anything about RISE KSP admissions — courses, eligibility, documents, the admission process, fees, and more.
            Powered by IBM watsonx Orchestrate with a College Admission RAG Agent.
          </p>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            '🎓 Course information',
            '📋 Eligibility criteria',
            '📄 Documents required',
            '🔄 Admission process',
            '💰 Fee guidance',
            '❓ General FAQs',
          ].map(tag => (
            <span key={tag} className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* IBM watsonx Orchestrate chat embed container */}
        <div className="bg-slate-50 border-2 border-blue-100 rounded-2xl overflow-hidden shadow-lg">
          {/* Chat header bar */}
          <div className="bg-blue-700 px-5 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-white/20"></span>
              <span className="w-3 h-3 rounded-full bg-white/20"></span>
              <span className="w-3 h-3 rounded-full bg-white/20"></span>
            </div>
            <div className="flex items-center gap-2 mx-auto">
              <span className="text-white text-base">🤖</span>
              <span className="text-white text-sm font-semibold">RISE KSP Admission Assistant</span>
              <span className="bg-green-400 rounded-full w-2 h-2 inline-block"></span>
            </div>
            <div className="text-blue-300 text-xs whitespace-nowrap hidden sm:block">IBM watsonx</div>
          </div>

          {/* The IBM watsonx Orchestrate widget renders into this element */}
          {/* The rootElementID in index.html config is set to "wxo-chat-root" */}
          <div id="wxo-chat-root" className="min-h-[520px] w-full"></div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          This assistant is powered by IBM watsonx Orchestrate. Responses are based on verified RISE KSP admission information.
          For official confirmation, always contact the admissions office directly.
        </p>
      </div>
    </section>
  )
}
