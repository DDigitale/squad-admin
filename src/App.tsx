import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from 'layout'
import { PlayerModalContext } from 'contexts'
import { steamId } from 'types/players'
import { Admins, Login, NotFound, Panel, Players } from 'pages'
import { PlayerModal } from 'modules'
import { AdminsLog } from 'pages/admins-log/AdminsLog'
import { LayersContext } from 'contexts/layers-context'
import { LayerActionsContext } from 'contexts/layer-actions-context'
import { layer } from 'types/layers'
import { LayerModal } from 'modules/layers/LayerModal'
import { Toaster } from 'react-hot-toast'

function App() {
  const [playerInModal, setPlayerInModal] = useState<steamId | null>(null)
  const [layersInMenu, setLayersInMenu] = useState<boolean>(false)
  const [layerInModal, setLayerInModal] = useState<layer | undefined>(undefined)

  return (
    <PlayerModalContext.Provider value={[playerInModal, setPlayerInModal]}>
      <LayersContext.Provider value={[layersInMenu, setLayersInMenu]}>
        <LayerActionsContext.Provider value={[layerInModal, setLayerInModal]}>
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
          {layerInModal && (
            <LayerModal onClose={() => setLayerInModal(undefined)} />
          )}
          {playerInModal && (
            <PlayerModal
              playerSteamId={playerInModal}
              onClose={() => setPlayerInModal(null)}
            />
          )}
          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={5}
            toastOptions={{
              className: '',
              duration: 5000,
              style: {
                background: '#363636',
                color: '#fff',
              },

              success: {
                duration: 3000,
                theme: {
                  primary: 'green',
                  secondary: 'black',
                },
              },
            }}
          />
        </LayerActionsContext.Provider>
      </LayersContext.Provider>
    </PlayerModalContext.Provider>
  )
}

export default App
