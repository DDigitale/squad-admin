import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'
import { PrivateRoutes } from 'pages/PrivateRoute'
import { Players } from 'pages/Players'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
