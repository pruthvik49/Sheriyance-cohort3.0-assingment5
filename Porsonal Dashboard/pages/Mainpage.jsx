import React from 'react'

// import { Navigate, Route, Routes } from 'react-router-dom'
import { useClock } from '../src/hooks/useClock'
import HeroSection from '../components/landing/HeroSection'
import FeaturesSection from '../components/landing/FeaturesSection'
import CTASection from '../components/landing/CTASection'
import DashboardPreview from '../components/dashboard/DashboardPreview'
import { Outlet } from 'react-router-dom'
// import Bigveiwtodo from '../pages/Bigveiwtodo'
const Mainpage = () => {

 const { clock, date } = useClock()

  
  return (
    <>
          <Outlet/>
          <HeroSection />
          <DashboardPreview clock={clock} date={date} />
          <FeaturesSection />
          <CTASection />
    
    </>
  )
}

export default Mainpage