import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import lgb from '../../src/assets/logout-circle-r-line.svg'
import { UserContext } from '../../context/TodoformC'
import { useDispatch } from 'react-redux'
import { handleLogout } from '../../features/auth'

const Header = ({ onGetStarted }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { setLoginuser } = useContext(UserContext)

  const logout = () => {
    localStorage.removeItem('Luser')
    setLoginuser(null)
    dispatch(handleLogout())
    navigate('/')
  }

  return (
    <header className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
      <div className="flex items-center justify-between cursor-pointer "
      onClick={()=>{
        navigate('/home')
      }}>
        <div className="hover:scale-95 w-9 h-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 "
        >
          ✦
        </div>
        <span className="text-lg font-semibold tracking-tight">FocusBoard</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
        <a href="#features" className="hover:text-white">Features</a>
        <a href="#preview" className="hover:text-white">Preview</a>
        <Link to="/home/about" className="hover:text-white">About</Link>
      </nav>
      <div className='flex gap-2'>
      <button
        onClick={onGetStarted}
        className="rounded-full bg-white text-black text-sm font-medium px-5 py-2 hover:bg-white/90 transition"
      >
        Get started
      </button>
      <img 
      onClick={logout}
      className='w-7 m-0 p-0 cursor-pointer hover:scale-105' src={lgb} alt="" />
      </div>
      
    </header>
  )
}

export default Header
