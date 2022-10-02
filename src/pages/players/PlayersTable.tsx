import React, { useContext } from 'react'
import styles from './PlayersTable.module.scss'
import {
  FaHammer,
  FaRegCommentAlt,
  FaRegStickyNote,
  FaSteam,
} from 'react-icons/fa'
import { PlayerRow } from 'pages/players/PlayerRow'

interface Props {
  content: any
}

export function PlayersTable({ content: players }: Props) {
  return (
    <div className={styles.wrapper}>
      {players.map((player: any) => (
        <PlayerRow key={player.steamId} player={player} />
      ))}
    </div>
  )
}
