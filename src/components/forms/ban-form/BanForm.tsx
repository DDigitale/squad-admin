import React, { useState } from 'react'
import styles from './BanForm.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { banPlayer } from '../../../api/users'
import Select from 'react-select'

interface Props {
  steamId: string
}

export function BanForm({ steamId }: Props) {
  const queryClient = useQueryClient()

  const [banReason, setBanReason] = useState('')
  const [banLength, setBanLength] = useState('')

  const reasonOptions = [
    {
      value: '1.1. В отряде всегда должен быть сквадной с китом SL',
      label: '1.1. В отряде всегда должен быть сквадной с китом SL',
    },
    {
      value:
        '1.2. SL должны иметь микрофон и поддерживать связь с другими игроками',
      label:
        '1.2. SL должны иметь микрофон и поддерживать связь с другими игроками',
    },
    {
      value:
        '1.3. Запрещено передавать сквадного другому игроку, если об этом не было договоренности. Выход из отряда приравнивается к передаче сквадного',
      label:
        '1.3. Запрещено передавать сквадного другому игроку, если об этом не было договоренности. Выход из отряда приравнивается к передаче сквадного',
    },
    {
      value:
        '1.4. Сквадному запрещено открывать технику требующую 2 кита crewman, если экипаж для нее не полный',
      label:
        '1.4. Сквадному запрещено открывать технику требующую 2 кита crewman, если экипаж для нее не полный',
    },
  ]

  const lengthOptions = [
    {
      value: '1d',
      label: '1 день',
    },
    {
      value: '3d',
      label: '3 дня',
    },
    {
      value: '7d',
      label: '7 дней',
    },
    {
      value: '14d',
      label: '14 дней',
    },
    {
      value: '30d',
      label: '30 дней',
    },
    {
      value: '0',
      label: '8 лет',
    },
  ]

  const banPlayerMutation = useMutation(
    () => banPlayer(steamId, banLength, banReason),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  const handleChangeReason = (selectedOption: any) => {
    console.log('asd', selectedOption)
    setBanReason(selectedOption.value)
  }

  const handleChangeLength = (selectedOption: any) => {
    console.log('asd', selectedOption)
    setBanLength(selectedOption.value)
  }

  return (
    <div className={styles.wrapper}>
      <Select
        options={reasonOptions}
        onChange={handleChangeReason}
        className={styles.reason}
      />
      <div className={styles.container}>
        <Select
          options={lengthOptions}
          onChange={handleChangeLength}
          className={styles.length}
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
