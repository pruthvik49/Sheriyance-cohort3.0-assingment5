import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/TodoformC'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { handleLogin as loginSuccess } from '../features/auth'


const Beforeloging = () => {
  const dispatch = useDispatch()
  const {loginuser, setLoginuser, resisteruser} = useContext(UserContext)
const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const handleLogin = (data) => {
    const users = Array.isArray(resisteruser) ? resisteruser : []
    const user = users.find((registeredUser) =>
      registeredUser?.username === data.username &&
      registeredUser?.password === data.password
    )

    if (!user) {
      toast.error("Invalid username or password")
      return
    }

    setLoginuser(user)
    localStorage.setItem("Luser", JSON.stringify(user))
    dispatch(loginSuccess(user))
    navigate("/home")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Login
        </h1>

        <p className="mb-6 text-center text-sm text-gray-500">
          Enter your credentials to continue
        </p>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Username
          </label>

          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            autoComplete="username"
            {...register('username', { required: 'Username is required' })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          {errors.username && (
            <p id="username-error" role="alert" className="mt-1 text-sm text-red-600">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <input
            placeholder="Enter your password"
            id="password"
            type="password"
            autoComplete="current-password"
            {...register('password', { required: 'Password is required' })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          {errors.password && (
            <p id="password-error" role="alert" className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
        // onClick={}
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
        >
          Login
        </button>
        <span className='text-blue-500 cursor-pointer '
        onClick={()=>{
          navigate('/resisterpage')
        }}
        >Create Account </span>
      </form>
    </div>
  )
}

export default Beforeloging
