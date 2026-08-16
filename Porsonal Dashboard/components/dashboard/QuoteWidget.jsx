import React from 'react'
import WidgetCard from '../ui/WidgetCard'

const QuoteWidget = () => {
  return (
    <WidgetCard label="Quote" gradient="bg-white/[0.03]">
      <p className="mt-3 text-sm leading-relaxed text-white/80">
        "You do not rise to the level of your goals. You fall to the level of your systems."
      </p>
      <div className="mt-3 text-xs text-white/40">— James Clear</div>
    </WidgetCard>
  )
}

export default QuoteWidget
