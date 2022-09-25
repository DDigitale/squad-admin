import React from 'react'
import styles from './Panel.module.scss'
import { useQuery } from '@tanstack/react-query'
import { fetchTeams } from 'api/users'
import { flatTeams } from 'utils'
import {
  DisconnectedPlayers,
  MapSelector,
  SearchPlayer,
  ServerInfo,
  SuspectedPlayers,
  Teams,
} from 'modules'

export function Panel() {
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
    <div className={styles.wrapper}>
      <SearchPlayer />
      <ServerInfo />
      <main className={styles.main}>
        <Teams teams={teams} />
      </main>
      <MapSelector />
      <SuspectedPlayers players={flatTeams(teams)} />
      <DisconnectedPlayers />
    </div>
  )
}
