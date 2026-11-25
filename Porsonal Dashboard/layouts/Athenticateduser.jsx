import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AmbientBackground from '../components/layout/AmbientBackground'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { useSelector } from 'react-redux'


const Athenticateduser = () => {

  const loginuser = useSelector((state) => state.auth.value)
  if (!loginuser) {
    return <Navigate to="/"  />
  }
  const handleGetStarted = () => {
    alert('Welcome to FocusBoard!')
  }
  
  
  return (
    <main>
      <div className="bg-[#0b0b12] text-white min-h-screen">
        <AmbientBackground />
        <div className="relative">
          <Header onGetStarted={handleGetStarted} />
           <Outlet />
          <Footer />
        </div>
      </div>
    </main>
  )
}



export default Athenticateduser
