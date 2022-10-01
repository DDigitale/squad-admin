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
  const [banLengthInTimeStamp, setBanLengthInTimeStamp] = useState('')

  const reasonOptions = [
    {
      value: `В отряде всегда должен быть сквадной с китом SL.`,
      label: 'В отряде всегда должен быть сквадной с китом SL',
    },
    {
      value: `Политика.`,
      label: 'Политика',
    },
    {
      value: `Оскорбления в командирском чате.`,
      label: 'Оскорбления в командирском чате',
    },
    {
      value: `Оскорбления в чате.`,
      label: 'Оскорбления в чате',
    },
    {
      value: `Перекинул СЛ.`,
      label: 'Перекинул СЛ',
    },
  ]

  const lengthOptions = [
    {
      value: { banLengthInTimeStamp: 86400000, banLength: '1d' },
      label: '1 день',
    },
    {
      value: { banLengthInTimeStamp: 259200000, banLength: '3d' },
      label: '3 дня',
    },
    {
      value: { banLengthInTimeStamp: 604800000, banLength: '7d' },
      label: '7 дней',
    },
    {
      value: { banLengthInTimeStamp: 1209600000, banLength: '14d' },
      label: '14 дней',
    },
    {
      value: { banLengthInTimeStamp: 2592000000, banLength: '30d' },
      label: '30 дней',
    },
    {
      value: { banLengthInTimeStamp: 90061000000, banLength: '0' },
      label: 'Пермбан',
    },
  ]

  const banPlayerMutation = useMutation(
    () => banPlayer(steamId, banLength, banLengthInTimeStamp, banReason),
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
