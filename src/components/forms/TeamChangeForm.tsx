import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { kickReasonText } from 'config/actions-text'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { teamChangePlayer } from '../../api/users'

interface Props {
  steamId: string
  name: string
}

export function TeamChangeForm({ steamId, name }: Props) {
  const queryClient = useQueryClient()

  const teamChangeMutation = useMutation(() => teamChangePlayer(steamId), {
    onSuccess: () => queryClient.invalidateQueries(['players']),
  })

  return (
    <div>
      <p>Сменить команду игроку {name}?</p>
      <button className="action-btn" onClick={() => teamChangeMutation}>
        СМЕНИТЬ
      </button>
    </div>
  )
}
