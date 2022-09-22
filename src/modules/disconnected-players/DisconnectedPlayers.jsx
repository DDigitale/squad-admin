import React, { useContext } from 'react'
import styles from './DisconnectedPlayers.module.scss'
import { selectPlayers } from 'store/slices/get-players/getOnlineSlice'
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from 'store/slices/modal/modalSlice'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchDisconnectedPlayers, fetchTeams } from '../../api/Users'
import { ModalContext } from '../../contexts'

function DisconnectedPlayers() {
  const [playerModal, setPlayerModal] = useContext(ModalContext)

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
            onClick={() => setPlayerModal(player)}
          >
            <div className={styles.name}>{player.name}</div>
            <div className={styles.since}>{player.sinceDisconnected} назад</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default DisconnectedPlayers
