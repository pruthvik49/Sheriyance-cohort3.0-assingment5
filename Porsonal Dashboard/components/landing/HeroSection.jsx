import React from 'react'

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        Practice project · Landing page only
      </span>
      <h1 className="mt-8 max-w-4xl mx-auto text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
        One calm dashboard for
        <span className="block gradient-text">your whole day.</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-white/70">
        Todos, planner, pomodoro, weather, quotes and goals — everything you need to focus, all in one beautifully quiet place.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a href="#preview" className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition">
          Open dashboard →
        </a>
        <a href="#features" className="rounded-full border border-white/15 bg-white/5 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-white/10 transition">
          See a demo
        </a>
      </div>
    </section>
  )
}

export default HeroSection
