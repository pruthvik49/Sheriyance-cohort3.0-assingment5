import React, { useState } from 'react'
import WidgetCard from '../ui/WidgetCard'

const QuoteWidget = () => {
  const [isEditing, setIsEditing] = useState(true)
  const [quote, setQuote] = useState('')

  const saveQuote = (nextQuote) => {
    const trimmedQuote = nextQuote.trim()

    if (!trimmedQuote) {
      setIsEditing(true)
      return
    }

    setQuote(trimmedQuote)
    setIsEditing(false)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      saveQuote(event.target.value)
    }
  }

  return (
    <WidgetCard label="Quote" gradient="bg-white/[0.03]">
      {isEditing ? (
        <textarea
          value={quote}
          onChange={(event) => setQuote(event.target.value)}
          onKeyDown={handleKeyDown}
          className="mt-3 block w-full resize-none rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm leading-relaxed text-white/80 transition-colors focus:border-white/20 focus:bg-white/[0.06] focus:outline-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Quote"
          rows={3}
          placeholder="Write your favorite quote..."
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="mt-3 block w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-left text-sm leading-relaxed text-white/80 transition-colors hover:bg-white/[0.06] focus:outline-none"
        >
          {quote}
        </button>
      )}
      <div className="mt-3 text-xs text-white/40">— pruthvik the grate coder</div>
    </WidgetCard>
  )
}

export default QuoteWidget
