import { useState, useEffect } from 'react'

export function useClock() {
  const [clock, setClock] = useState('09:41')
  const [date, setDate] = useState('Thursday, Jul 9')

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
      const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
      })
      setClock(timeStr)
      setDate(dateStr)
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  return { clock, date }
}
