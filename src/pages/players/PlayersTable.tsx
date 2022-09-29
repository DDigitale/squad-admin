import React from 'react'
import { Players } from 'types/players'
import { PlayerRow } from 'pages/players/PlayerRow'

interface Props {
  content: any
}

export function PlayersTable({ content: players }: Props) {
  console.log(players)
  return (
    <div>
      {players.map((player: any) => (
        <PlayerRow player={player} />
      ))}
    </div>
  )
}
