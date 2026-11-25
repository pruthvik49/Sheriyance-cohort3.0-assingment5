import React from 'react'
import { useNavigate } from 'react-router-dom'

const CTASection = () => {

  const navigate = useNavigate()
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 pb-28">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-emerald-400/10 backdrop-blur p-10 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ready to focus?</h3>
        <p className="mt-3 max-w-xl mx-auto text-white/70">
          Pick a book, set a goal, and start a pomodoro. Here we have book Srore for you please checkout  
        </p>
        <button
          onClick={()=>{
            navigate("/home/bookstore")
          }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
        >
          Read book today →
        </button>
      </div>
    </section>
  )
}

export default CTASection
