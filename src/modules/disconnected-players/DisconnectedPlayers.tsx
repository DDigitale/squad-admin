import React, { useContext, useEffect } from 'react'
import styles from './DisconnectedPlayers.module.scss'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  disconnectedPlayers: any
}

export function DisconnectedPlayers({ disconnectedPlayers }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const location = useLocation()

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.title}>Отключившиеся игроки</p>
        {disconnectedPlayers?.map((player: any) => (
          <Link
            style={{ textDecoration: 'none' }}
            to={`player/${player.steamId}`}
            state={{ background: location }}
            key={player.id}
            className={styles.item}
            onClick={() => setPlayerModal(player.steamId)}
          >
            <div className={styles.name}>{player.name}</div>
            <div className={styles.since}>{player.sinceDisconnected} назад</div>
          </Link>
        ))}
      </div>
    </>
  )
}
