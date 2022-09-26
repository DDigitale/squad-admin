import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from 'layout'
import { PlayerModalContext } from 'contexts'
import { steamId } from 'types/players'
import { Admins, Login, NotFound, Panel, Players } from 'pages'
import { PlayerModal } from 'modules'
import { AdminsLog } from 'pages/admins-log/AdminsLog'
import { LayerModalContext } from 'contexts/layer-modal-context'

function App() {
  const [playerInModal, setPlayerInModal] = useState<steamId | null>(null)
  const [layerInModal, setLayerInModal] = useState<boolean>(false)

  return (
    <PlayerModalContext.Provider value={[playerInModal, setPlayerInModal]}>
      <LayerModalContext.Provider value={[layerInModal, setLayerInModal]}>
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
      </LayerModalContext.Provider>
    </PlayerModalContext.Provider>
  )
}

export default App
