import React from 'react'

const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-fuchsia-500/20 blur-3xl"></div>
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-emerald-400/10 blur-3xl"></div>
    </div>
  )
}

export default AmbientBackground
