import React from 'react'
import ClockWidget from './ClockWidget'
import PomodoroWidget from './PomodoroWidget'
import WeatherWidget from './WeatherWidget'
import TodoWidget from './TodoWidget'
import QuoteWidget from './QuoteWidget'

const DashboardPreview = ({ clock, date }) => {
  return (
    <section id="preview" className="max-w-6xl mx-auto px-6 pb-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-3 shadow-2xl">
        <div className="rounded-2xl bg-[#0e0e18] p-6">
          <div className="grid md:grid-cols-3 gap-4">
            <ClockWidget clock={clock} date={date} />
            <PomodoroWidget />
            <WeatherWidget />
            <TodoWidget />
            <QuoteWidget />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardPreview
