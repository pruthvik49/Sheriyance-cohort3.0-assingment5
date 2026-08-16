import React, { useState } from 'react'
import { useClock } from './hooks/useClock'
import Dashboardoptions from '../components/Dashboardoptions'
import AmbientBackground from '../components/layout/AmbientBackground'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/landing/HeroSection'
import FeaturesSection from '../components/landing/FeaturesSection'
import CTASection from '../components/landing/CTASection'
import DashboardPreview from '../components/dashboard/DashboardPreview'

const App = () => {
  const [dash, setDash] = useState(true)
  const { clock, date } = useClock()

  const handleGetStarted = () => {
    alert('Welcome to FocusBoard!')
  }

  const handleStartDay = () => {
    alert('Have a focused day!')
  }

  return (
    <main>
      <div className="bg-[#0b0b12] text-white min-h-screen">
        <AmbientBackground />
        <div className="relative">
          <Header onGetStarted={handleGetStarted} />
          <HeroSection />
          <DashboardPreview clock={clock} date={date} />
          <FeaturesSection />
          <CTASection onStartDay={handleStartDay} />
          <Footer />
        </div>
      </div>
      <Dashboardoptions setDash={setDash} dash={dash} />
    </main>
  )
}

export default App
