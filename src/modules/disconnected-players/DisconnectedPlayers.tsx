import React, { useContext } from 'react'
import styles from './DisconnectedPlayers.module.scss'
import { useQuery } from '@tanstack/react-query'
import { fetchDisconnectedPlayers } from 'api/users'
import { ModalContext, ModalContextType } from 'contexts'

export function DisconnectedPlayers() {
  const [playerModal, setPlayerModal] = useContext(
    ModalContext
  ) as ModalContextType

  const {
    data: disconnectedPlayers,
    isSuccess,
    isError,
  } = useQuery(['players', 'disconnected'], fetchDisconnectedPlayers, {
    refetchInterval: 3000,
  })

  if (!isSuccess) {
    return <h1>Загрузка игроков</h1>
  }

  if (isError) {
    return <h1>Ошибка загрузки игроков</h1>
  }

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.title}>Отключившиеся игроки</p>
        {disconnectedPlayers.map((player) => (
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
