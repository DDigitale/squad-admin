import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { kickPlayer } from '../../../api/users'
import styles from './KickForm.module.scss'
import Select from 'react-select'

interface Props {
  steamId: string
}

export function KickForm({ steamId }: Props) {
  const queryClient = useQueryClient()
  const [kickReason, setKickReason] = useState('')

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

  const kickPlayerMutation = useMutation(
    () => kickPlayer(steamId, kickReason),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  const handleChange = (selectedOption: any) => {
    console.log('asd', selectedOption)
    setKickReason(selectedOption.value)
  }

  return (
    <div className={styles.wrapper}>
      <Select
        options={reasonOptions}
        onChange={handleChange}
        className={styles.reason}
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
