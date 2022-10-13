import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { warnPlayer } from 'api/users'
import styles from './WarnForm.module.scss'
import CreatableSelect from 'react-select/creatable'
import { customSelectorStyles } from 'components/forms/SelectorStyles'
import { groupedOptions } from 'api/local/options'

interface Props {
  steamId: string
  name: string
}

export function WarnForm({ steamId, name }: Props) {
  const queryClient = useQueryClient()
  const [warnReason, setWarnReason] = useState('')

  const warnPlayerMutation = useMutation(
    () => warnPlayer(steamId, warnReason, name),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  const handleChange = (selectedOption: any) => {
    setWarnReason(selectedOption.value)
  }

  return (
    <div className={styles.wrapper}>
      <CreatableSelect
        options={groupedOptions}
        onChange={handleChange}
        styles={customSelectorStyles}
        placeholder={'Выберите или введите сообщение'}
      />
      <div className={styles.container}>
        <button
          className={styles.button}
          onClick={() => warnPlayerMutation.mutate()}
        >
          ОТПРАВИТЬ
        </button>
      </div>
    </div>
  )
}
