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
    () => removePlayerFromSquad(steamId, name),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  const handleClick = () => {
    confirm(`Вы уверены что хотите выгнать из отряда игрока ${name}`) &&
      removePlayerFromSquadMutation.mutate()
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={handleClick}>
        ИСКЛЮЧИТЬ ИЗ ОТРЯДА ИГРОКА <br />
        {name}
      </button>
    </div>
  )
}
