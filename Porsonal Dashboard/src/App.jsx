import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AmbientBackground from '../components/layout/AmbientBackground'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Mainpage from '../pages/Mainpage'
import Bigveiwtodo from '../pages/Bigveiwtodo'
import FeaturesAbout from '../pages/FeaturesAbout'
import Books from '../pages/Books'
import Cardforbooks from '../pages/Cardforbooks'

const App = () => {

  const handleGetStarted = () => {
    alert('Welcome to FocusBoard!')
  }
  
  return (
    <main>
      <div className="bg-[#0b0b12] text-white min-h-screen">
        <AmbientBackground />
        <div className="relative">
          <Header onGetStarted={handleGetStarted} />
          <Routes>
          <Route path='/' element={<Mainpage/>}/>
          <Route path='/bigW' element={<Bigveiwtodo/>}/>
          <Route path='/bookstore' element={<Books/>}/>
          <Route path='/detail/:id' element={<Cardforbooks/>}/>
          <Route path='/about' element={<FeaturesAbout/>}/>
          </Routes>
          <Footer />
        </div>
      </div>
    </main>
  )
}



export default App
