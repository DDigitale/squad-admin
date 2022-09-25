import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from 'layout'
import { ModalContext } from 'contexts'
import { steamId } from 'types/players'
import { Admins, Login, NotFound, Panel, Players } from 'pages'
import { PlayerModal } from 'modules'
import { AdminsLog } from 'pages/admins-log/AdminsLog'

function App() {
  const [playerInModal, setPlayerInModal] = useState<steamId | null>(null)

  return (
    <ModalContext.Provider value={[playerInModal, setPlayerInModal]}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Panel />} />
            <Route path="/players" element={<Players />} />
            <Route path="/admins" element={<Admins />} />
            <Route path="/admins-log" element={<AdminsLog />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {playerInModal && (
        <PlayerModal
          playerSteamId={playerInModal}
          onClose={() => setPlayerInModal(null)}
        />
      )}
    </ModalContext.Provider>
  )
}

export default App
