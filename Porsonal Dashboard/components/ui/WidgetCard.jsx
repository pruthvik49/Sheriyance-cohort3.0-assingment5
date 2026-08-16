import React from 'react'

const WidgetCard = ({ label, gradient, children, className = '' }) => {
  return (
    <div className={`rounded-xl border border-white/10 p-5 ${gradient} ${className}`}>
      {label && (
        <div className="text-xs uppercase tracking-widest text-white/50">{label}</div>
      )}
      {children}
    </div>
  )
}

export default WidgetCard
