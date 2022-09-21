import React, { useEffect } from 'react'
import styles from './PlayersList.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getOnlineResponse, selectPlayers, selectPlayersInfo } from 'store'
import { TeamItem } from 'modules/players-list/components/team-item/TeamItem'
import { useQuery } from '@tanstack/react-query'
import { fetchTeams } from '../../api/Users'

export function PlayersList() {
  const dispatch = useDispatch()
  const { isLoading } = useSelector(selectPlayersInfo)
  const players = useSelector((state) => selectPlayers(state))

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
    <>
      <div className={styles.wrapper}>
        {teams.map((team) => (
          <TeamItem key={team.id} team={team} />
        ))}
      </div>
    </>
  )
}
