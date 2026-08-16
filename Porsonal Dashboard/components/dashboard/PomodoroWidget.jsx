import React from 'react'
import WidgetCard from '../ui/WidgetCard'

const PomodoroWidget = () => {
  return (
    <WidgetCard label="Focus" gradient="bg-gradient-to-br from-fuchsia-500/20 to-transparent">
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-4xl font-semibold">24:12</span>
        <span className="text-sm text-white/60">/ 25:00</span>
      </div>
      <div className="mt-3 h-1.5 rounded-full bg-white/10">
        <div className="h-full w-[3%] rounded-full bg-fuchsia-400"></div>
      </div>
    </WidgetCard>
  )
}

export default PomodoroWidget
