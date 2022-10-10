import React, { useContext, useEffect } from 'react'
import styles from './DisconnectedPlayers.module.scss'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'

interface Props {
  disconnectedPlayers: any
}

export function DisconnectedPlayers({ disconnectedPlayers }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.title}>Отключившиеся игроки</p>
        {disconnectedPlayers?.map((player: any) => (
          <div
            key={player.id}
            className={styles.item}
            onClick={() => setPlayerModal(player.steamId)}
          >
            <div className={styles.name}>{player.name}</div>
            <div className={styles.since}>{player.sinceDisconnected} назад</div>
          </div>
        ))}
      </div>
    </>
  )
}
