import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/sign-up/signUp'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<SignUpPage />} path='/sign-up' />
        </Routes>
      </Router>
    </>
  )
}

export default App