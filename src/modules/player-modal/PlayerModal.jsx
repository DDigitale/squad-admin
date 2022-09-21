import React from 'react'
import { Modal } from '../../components/modal'
import { useQuery } from '@tanstack/react-query'
import { fetchDisconnectedPlayers } from '../../api/Users'

export function PlayerModal({ playerId }) {
  const {
    data: player,
    isSuccess,
    isError,
  } = useQuery(['players', playerId], fetchPlayer)

  if (!isSuccess) {
    return null
  }

  // if (isError) {
  //   return <h1>Ошибка загрузки игроков</h1>
  // }

  return (
    <Modal>
      <div>{player}</div>
    </Modal>
  )
}
