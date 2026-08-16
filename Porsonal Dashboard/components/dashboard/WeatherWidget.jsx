import React from 'react'
import WidgetCard from '../ui/WidgetCard'

const WeatherWidget = () => {
  return (
    <WidgetCard label="Weather" gradient="bg-gradient-to-br from-emerald-400/20 to-transparent">
      <div className="text-4xl font-semibold mt-2">22°</div>
      <div className="mt-1 text-sm text-white/60">Clear · Lisbon</div>
    </WidgetCard>
  )
}

export default WeatherWidget
