import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage'
import AllNotes from './pages/allNotes'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/notes' element={<AllNotes />} />
      </Routes>
    </Router>
  )
}

export default App