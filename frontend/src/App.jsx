import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

const App = () => {
  const { authUser } = useAuthContext()

  return (
    <div className='p-4 h-screen flex items-center justify-center bg-gray-100'>
      <Routes>
        <Route path='/' element= {  authUser ? <Home /> : <Navigate to={"/login"} /> }/>
        <Route path='/login' element={authUser ? <Navigate to={"/"} /> : <Login />} />
        <Route path='/signup' element={  authUser ? <Navigate to={"/"} /> : <Signup />} />
      </Routes>
    </div>
  )
}

export default App
