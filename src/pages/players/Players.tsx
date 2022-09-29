import React from 'react'
import styles from 'pages/players/Players.module.scss'
import { useQuery } from '@tanstack/react-query'
import { fetchPlayers } from 'api/users'
import { PlayersTable } from 'pages/players/PlayersTable'

export function Players() {
  const {
    data: players,
    isSuccess,
    isError,
  } = useQuery(['players'], fetchPlayers)

  if (!isSuccess) {
    return <h1>Загрузка игроков</h1>
  }

  if (isError) {
    return <h1>Ошибка загрузки игроков</h1>
  }

  return (
    <div className={styles.wrapper}>
      <PlayersTable content={players?.content} />
    </div>
  )
}
