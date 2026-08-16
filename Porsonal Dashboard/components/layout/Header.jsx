import React from 'react'

const Header = ({ onGetStarted }) => {
  return (
    <header className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
      <div className="flex items-center gap-2">
        <div className="hover:scale-95 w-9 h-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
          ✦
        </div>
        <span className="text-lg font-semibold tracking-tight">FocusBoard</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
        <a href="#features" className="hover:text-white">Features</a>
        <a href="#preview" className="hover:text-white">Preview</a>
        <a href="#about" className="hover:text-white">About</a>
      </nav>
      <button
        onClick={onGetStarted}
        className="rounded-full bg-white text-black text-sm font-medium px-5 py-2 hover:bg-white/90 transition"
      >
        Get started
      </button>
    </header>
  )
}

export default Header
