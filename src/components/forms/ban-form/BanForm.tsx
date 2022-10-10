import React, { useState } from 'react'
import styles from './BanForm.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { banPlayer } from 'api/users'
import Select from 'react-select'
import { customSelectorStyles } from 'components/forms/SelectorStyles'
import { banLengthOptions, banOptions } from 'api/local/options'

interface Props {
  steamId: string
  name: string
}

export function BanForm({ steamId, name }: Props) {
  const queryClient = useQueryClient()

  const [banReason, setBanReason] = useState('')
  const [banLength, setBanLength] = useState('')
  const [banLengthInTimeStamp, setBanLengthInTimeStamp] = useState('')

  const banPlayerMutation = useMutation(
    () => banPlayer(steamId, banLength, banLengthInTimeStamp, banReason, name),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  const handleChangeReason = (selectedOption: any) => {
    setBanReason(selectedOption.value)
  }

  const handleChangeLength = (selectedOption: any) => {
    setBanLength(selectedOption.value.banLength)
    setBanLengthInTimeStamp(selectedOption.value.banLengthInTimeStamp)
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <Select
          styles={customSelectorStyles}
          options={banOptions}
          onChange={handleChangeReason}
          placeholder={'Выберите причину'}
        />
      </div>
      <div className={styles.container}>
        <Select
          className={styles.length}
          styles={customSelectorStyles}
          options={banLengthOptions}
          onChange={handleChangeLength}
          placeholder={'Выберите срок'}
        />
        <button
          className={styles.button}
          onClick={() => banPlayerMutation.mutate()}
        >
          ЗАБАНИТЬ
        </button>
      </div>
    </div>
  )
}
