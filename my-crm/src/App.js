import React, { useEffect } from 'react'
import './App.css'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Routes, Route, Navigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)


  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/Dashboard" /> : <Login />}
        />
        <Route
          path="/Dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  )
}

export default App
