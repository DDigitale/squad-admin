import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { kickPlayer } from 'api/users'
import styles from './KickForm.module.scss'
import Select from 'react-select'
import { customSelectorStyles } from 'components/forms/SelectorStyles'
import { groupedOptions } from 'api/local/options'

interface Props {
  steamId: string
  name: string
}

export function KickForm({ steamId, name }: Props) {
  const queryClient = useQueryClient()
  const [kickReason, setKickReason] = useState('')

  const kickPlayerMutation = useMutation(
    () => kickPlayer(steamId, kickReason, name),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  const handleChange = (selectedOption: any) => {
    setKickReason(selectedOption.value)
  }

  return (
    <div className={styles.wrapper}>
      <Select
        options={groupedOptions}
        onChange={handleChange}
        styles={customSelectorStyles}
        placeholder={'Выберите причину'}
      />
      <div className={styles.container}>
        <button
          className={styles.button}
          onClick={() => kickPlayerMutation.mutate()}
        >
          КИКНУТЬ
        </button>
      </div>
    </div>
  )
}
