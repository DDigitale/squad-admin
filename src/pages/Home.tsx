import React, { useState } from 'react'
import { SearchPlayer } from 'modules/search-player/SearchPlayer'
import { PlayersList } from 'modules/players-list/PlayersList'
import { ServerInfo } from 'modules/server-info/ServerInfo'
import { SuspectedPlayers } from 'modules/suspected-players/SuspectedPlayers'
import { Navbar } from 'components/navbar/Navbar'
import { MapSelector } from 'modules/map-selector/MapSelector'
import DisconnectedPlayers from 'modules/disconnected-players/DisconnectedPlayers'
import { ModalContext } from 'contexts'
import { PlayerModal } from '../modules/player-modal/PlayerModal'

export function Home() {
  const [playerInModal, setPlayerInModal] = useState(null)

  console.log('pim', playerInModal)

  return (
    <ModalContext.Provider value={[playerInModal, setPlayerInModal]}>
      <div className="main-container">
        <Navbar />
        <SearchPlayer />
        <SearchPlayer />
        <ServerInfo />
        <main className="main">
          <PlayersList />
        </main>
        <MapSelector />
        <SuspectedPlayers />
        <DisconnectedPlayers />
      </div>
      {playerInModal && (
        <PlayerModal
          player={playerInModal}
          onClose={() => setPlayerInModal(null)}
        />
      )}
    </ModalContext.Provider>
  )
}
