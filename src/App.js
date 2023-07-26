import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/sign-up/signUp'
import SignInPage from './pages/sign-in/signIn'
import Homepage from './pages/home/homepage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<SignUpPage />} path='/sign-up' />
        <Route element={<SignInPage />} path='/sign-in' />
        <Route element={<Homepage />} path='/' />
      </Routes>
    </Router>
  )
}

export default App