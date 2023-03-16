import React, { useContext } from 'react'
import styles from './PlayerRow.module.scss'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import {
  FaHammer,
  FaRegCommentAlt,
  FaRegStickyNote,
  FaSteam,
  FaUserTie,
} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  player: any
}

export function PlayerRow({ player }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const location = useLocation()

  return (
    <div className={styles.row}>
      <Link
        style={{ textDecoration: 'none' }}
        to={`/player/${player.steamId}`}
        state={{ background: location }}
        className={styles.name}
        onClick={() => setPlayerModal(player.steamId)}
      >
        {player.name}
      </Link>
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
        <FaHammer />{' '}
        {player.playersBansBySteamId + player.playersKicksBySteamId}
      </span>
      <span className={styles.messages}>
        <FaRegCommentAlt /> {player.playersMessagesBySteamId}
      </span>
      <span className={styles.notes}>
        <FaRegStickyNote /> {player.playersNotesBySteamId}
      </span>
      <span className={styles.notes}>
        <FaUserTie /> {player.numOfAdminActions}
      </span>
    </div>
  )
}
