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
import { useQuery } from '@tanstack/react-query'
import { fetchTeams } from '../api/users'
import { flatTeams } from '../utils/extendPlayers'
import { Player, PlayerWithoutSquad } from '../types/player'

export function Home() {
  const [playerInModal, setPlayerInModal] = useState<
    Player | PlayerWithoutSquad | null
  >(null)

  const {
    data: teams,
    isSuccess,
    isError,
  } = useQuery(['teams'], fetchTeams, {
    refetchInterval: 3000,
  })

  if (!isSuccess) {
    return <h1>Загрузка игроков</h1>
  }

  if (isError) {
    return <h1>Ошибка загрузки игроков</h1>
  }

  return (
    <ModalContext.Provider value={[playerInModal, setPlayerInModal]}>
      <div className="main-container">
        <Navbar />
        <SearchPlayer />
        <SearchPlayer />
        <ServerInfo />
        <main className="main">
          <PlayersList teams={teams} />
        </main>
        <MapSelector />
        <SuspectedPlayers players={flatTeams(teams)} />
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
