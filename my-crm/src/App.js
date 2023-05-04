import React, { useEffect } from 'react'
import './App.css'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Routes, Route } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

function App() {
  
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
