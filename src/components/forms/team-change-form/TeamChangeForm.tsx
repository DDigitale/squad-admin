import React from 'react'
import styles from './TeamChangeForm.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { teamChangePlayer } from 'api/users'

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
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => teamChangeMutation.mutate()}
      >
        СМЕНИТЬ КОМАНДУ ИГРОКУ <br />
        {name}
      </button>
    </div>
  )
}
