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
import AdminRoute from 'pages/admin-route/AdminRoute'
import Bans from 'pages/bans/Bans'
import ChatHistory from 'pages/chat-history/ChatHistory'
import { ruRU } from 'rsuite/locales'
import { CustomProvider } from 'rsuite'
import { useQuery } from '@tanstack/react-query'
import { fetchGetMyRoleGroup } from 'api/admins'

function App() {
  const [playerInModal, setPlayerInModal] = useState<steamId | null>(null)
  const [layersInMenu, setLayersInMenu] = useState<boolean>(false)
  const [layerInModal, setLayerInModal] = useState<layer | undefined>(undefined)

  const roles = localStorage.getItem('roles')

  const { data: myRoleGroup } = useQuery(
    ['my-role-group'],
    fetchGetMyRoleGroup,
    {
      enabled: roles !== null,
    }
  )

  if (myRoleGroup && roles) {
    localStorage.setItem(
      'roles',
      myRoleGroup.roles.map((role: any) => role.role.name)
    )
  }

  return (
    <CustomProvider theme="dark" locale={ruRU}>
      <PlayerModalContext.Provider value={[playerInModal, setPlayerInModal]}>
        <LayersContext.Provider value={[layersInMenu, setLayersInMenu]}>
          <LayerActionsContext.Provider value={[layerInModal, setLayerInModal]}>
            <Router>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoutes />}>
                  <Route path="/" element={<Panel />} />
                  {roles?.includes('Admin log access') ? (
                    <>
                      <Route path="/admins-log" element={<AdminsLog />} />
                    </>
                  ) : null}
                  {roles?.includes('Base access') ? (
                    <>
                      <Route path="/players-list" element={<Players />} />
                      <Route path="/admins-list" element={<Admins />} />
                      <Route path="/bans-log" element={<Bans />} />
                      <Route path="/chat-log" element={<ChatHistory />} />
                    </>
                  ) : null}
                  {roles?.includes('Management') ? (
                    <Route path="/admin-route" element={<AdminRoute />} />
                  ) : null}
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
              position="bottom-left"
              reverseOrder={false}
              gutter={5}
              toastOptions={{
                className: '',
                duration: 3000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
                success: {
                  duration: 3000,
                },
              }}
            />
          </LayerActionsContext.Provider>
        </LayersContext.Provider>
      </PlayerModalContext.Provider>
    </CustomProvider>
  )
}

export default App
