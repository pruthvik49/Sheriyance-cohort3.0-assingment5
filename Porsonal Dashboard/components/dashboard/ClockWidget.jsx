import React from 'react'
import WidgetCard from '../ui/WidgetCard'

const ClockWidget = ({ clock, date }) => {
  return (
    <WidgetCard label="Now" gradient="bg-gradient-to-br from-indigo-500/20 to-transparent">
      <div className="text-4xl font-semibold mt-2">{clock}</div>
      <div className="mt-1 text-sm text-white/60">{date}</div>
    </WidgetCard>
  )
}

export default ClockWidget
