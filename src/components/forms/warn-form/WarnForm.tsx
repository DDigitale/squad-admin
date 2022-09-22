import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { warnPlayer } from '../../../api/users'
import styles from './WarnForm.module.scss'
import CreatableSelect from 'react-select/creatable'

interface Props {
  steamId: string
}

export function WarnForm({ steamId }: Props) {
  const queryClient = useQueryClient()
  const [warnReason, setWarnReason] = useState('')

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

  const warnPlayerMutation = useMutation(
    () => warnPlayer(steamId, warnReason),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  const handleChange = (selectedOption: any) => {
    console.log('asd', selectedOption)
    setWarnReason(selectedOption.value)
  }

  return (
    <div className={styles.wrapper}>
      <CreatableSelect
        options={reasonOptions}
        onChange={handleChange}
        className={styles.reason}
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
