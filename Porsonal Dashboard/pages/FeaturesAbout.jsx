import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../src/assets/hero.png'
import { increse } from '../features/counter'
import { useDispatch, useSelector } from 'react-redux'

const FeaturesAbout = () => {

const count = useSelector(state => state.counter.value)
const dispatch = useDispatch()


  return (
    <main className="max-w-6xl mx-auto px-6 py-12 sm:py-20">
      <Link to="/" className="text-sm text-white/60 hover:text-white transition">
        ← Back to dashboard
      </Link>
      <section className="mt-8 grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-emerald-300">FEATURE PREVIEW · ABOUT</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl"
          onClick={()=>{
            dispatch(increse())
          }}>
            A clearer view of your day {count}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
            FocusBoard brings a few everyday planning tools together in one calm workspace. This
            preview shows the ideas behind the dashboard and how each feature supports a more
            intentional routine.
          </p>
          <ul className="mt-8 space-y-4 text-sm leading-6 text-white/75">
            <li><span className="mr-3 text-emerald-300">01</span>Keep tasks and daily priorities in view.</li>
            <li><span className="mr-3 text-emerald-300">02</span>Use a focus timer to give work a clear rhythm.</li>
            <li><span className="mr-3 text-emerald-300">03</span>Check the clock, weather, and a little inspiration at a glance.</li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <img
            src={heroImage}
            alt="Layered purple and white shapes representing a focused workspace"
            className="mx-auto max-h-80 w-full object-contain"
          />
        </div>
      </section>
    </main>
  )
}

export default FeaturesAbout