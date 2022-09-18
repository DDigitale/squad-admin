import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPlayers,
  selectPlayers,
  selectPlayersInfo,
} from '../../../store/features/get-players/getPlayersSlice'
import { TeamItem } from './TeamItem'

export function PlayersList() {
  const dispatch = useDispatch()
  const { isLoading, isError, isSuccess } = useSelector(selectPlayersInfo)
  const players = useSelector((state) => selectPlayers(state))

  // useEffect(() => {
  // 		setInterval(() => {
  // 			dispatch(getPlayers())
  // 			console.log('запрос')
  // 		}, 2000)
  // }, []);

  useEffect(() => {
    dispatch(getPlayers())
  }, [])

  return (
    <>
      {isLoading && <h1>Загрузка игроков</h1>}
      {isError && <h1>Ошибка загрузки игроков</h1>}
      {isSuccess && (
        <div className="teams-wrapper">
          {players.teams.map((team) => (
            <TeamItem key={team.id} team={team} />
          ))}
        </div>
      )}
    </>
  )
}
