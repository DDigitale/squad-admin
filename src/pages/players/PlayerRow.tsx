import React, { useContext } from 'react'
import styles from './PlayerRow.module.scss'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import {
  FaHammer,
  FaRegCommentAlt,
  FaRegStickyNote,
  FaSteam,
} from 'react-icons/fa'

interface Props {
  player: any
}

export function PlayerRow({ player }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType
  return (
    <div className={styles.row}>
      <span
        className={styles.name}
        onClick={() => setPlayerModal(player.steamId)}
      >
        {player.name}
      </span>
      <a
        className={styles.link}
        href={`http://steamcommunity.com/profiles/${player.steamId}`}
        target="_blank"
      >
        <FaSteam /> {player.steamId}
      </a>
      <span
        className={styles.bans}
        style={{
          backgroundColor:
            player.playersBansBySteamId > 0 ? 'rgba(255, 0, 0, 0.3)' : '',
        }}
      >
        <FaHammer /> {player.playersBansBySteamId}
      </span>
      <span className={styles.messages}>
        <FaRegCommentAlt /> {player.playersMessagesBySteamId}
      </span>
      <span className={styles.notes}>
        <FaRegStickyNote /> {player.playersNotesBySteamId}
      </span>
    </div>
  )
}
