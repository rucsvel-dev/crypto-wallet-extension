import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Initialize from '../ui/pages/Initialize'

const App: React.FC<{}> = () => {
  const navigate = useNavigate()

  return (
    <Routes>
      <Route
        path="/"
        element={<div onClick={() => navigate('/initialize')}>here</div>}
      />
      <Route path="/initialize" element={<Initialize />} />
    </Routes>
  )
}

export default App
