import React from 'react'
import styles from './RemovePlayerFromSquadForm.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { removePlayerFromSquad } from 'api/users'

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
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => removePlayerFromSquadMutation.mutate()}
      >
        ИСКЛЮЧИТЬ ИЗ ОТРЯДА ИГРОКА <br />
        {name}
      </button>
    </div>
  )
}
