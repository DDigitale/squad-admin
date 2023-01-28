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

  const teamChangeMutation = useMutation(
    () => teamChangePlayer(steamId, name),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  const handleClick = () => {
    confirm(`Вы уверены что хотите сменить команду игроку ${name}`) &&
      teamChangeMutation.mutate()
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={handleClick}>
        СМЕНИТЬ КОМАНДУ ИГРОКУ <br />
        {name}
      </button>
    </div>
  )
}
