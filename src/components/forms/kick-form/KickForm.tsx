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

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: '#3c3f41',
      border: 'none',
      height: 50,
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      color: 'rgba(253, 253, 254, 0.65)',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: '1px solid #5e5e5f',
      backgroundColor: state.isSelected
        ? '#939394'
        : '#3c3f41' && state.isFocused
        ? '#2a2a2b'
        : '#3c3f41',
      color: 'rgba(253, 253, 254, 0.65)',
      padding: '0.6rem',
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: '#3c3f41',
    }),
  }

  return (
    <div className={styles.wrapper}>
      <Select
        options={reasonOptions}
        onChange={handleChange}
        styles={customStyles}
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
