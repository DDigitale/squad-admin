import React, { useState } from 'react'
import styles from './BanForm.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { banPlayer } from 'api/users'
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
    {
      value:
        '1.4. Сквадному запрещено открывать технику требующую 2 кита crewman, если экипаж для нее не полный',
      label:
        '1.4. Сквадному запрещено открывать технику требующую 2 кита crewman, если экипаж для нее не полный',
    },
    {
      value:
        '1.4. Сквадному запрещено открывать технику требующую 2 кита crewman, если экипаж для нее не полный',
      label:
        '1.4. Сквадному запрещено открывать технику требующую 2 кита crewman, если экипаж для нее не полный',
    },
    {
      value:
        '1.4. Сквадному запрещено открывать технику требующую 2 кита crewman, если экипаж для нее не полный',
      label:
        '1.4. Сквадному запрещено открывать технику требующую 2 кита crewman, если экипаж для нее не полный',
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
    setBanReason(selectedOption.value)
  }

  const handleChangeLength = (selectedOption: any) => {
    setBanLength(selectedOption.value)
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
        styles={customStyles}
        options={reasonOptions}
        onChange={handleChangeReason}
        placeholder={'Выберите причину'}
      />
      <div className={styles.container}>
        <Select
          className={styles.length}
          styles={customStyles}
          options={lengthOptions}
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
