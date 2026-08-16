import React from 'react'

const FeaturesSection = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 pb-24">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-white/50">Everything inside</span>
        <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">Ten small tools. One quiet workspace.</h2>
      </div>
      <div id="feature-grid" className="flex flex-col gap-4 max-w-2xl mx-auto"></div>
    </section>
  )
}

export default FeaturesSection
