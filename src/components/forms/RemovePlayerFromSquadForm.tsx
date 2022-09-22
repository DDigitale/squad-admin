import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { removePlayerFromSquad, teamChangePlayer } from '../../api/users'

interface Props {
  steamId: string
  name: string
}

export function RemovePlayerFromSquadForm({ steamId, name }: Props) {
  const queryClient = useQueryClient()

  const removePlayerFromSquadMutation = useMutation(
    () => removePlayerFromSquad(steamId),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  return (
    <div>
      <p>Исключить из отряда игрока {name}?</p>
      <button
        className="action-btn"
        onClick={() => removePlayerFromSquadMutation.mutate()}
      >
        ИСКЛЮЧИТЬ
      </button>
    </div>
  )
}
