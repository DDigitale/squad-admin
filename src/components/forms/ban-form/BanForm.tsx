import React, { useEffect, useState } from 'react'
import styles from './BanForm.module.scss'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { banPlayer } from 'api/users'
import Select from 'react-select'
import { customSelectorStyles } from 'components/forms/SelectorStyles'
import { fetchGetRules } from 'api/admins'
import { banLengthOptions } from 'api/local/options'
import { Button } from 'rsuite'

interface Props {
  steamId: string
  name: string
}

export function BanForm({ steamId, name }: Props) {
  const queryClient = useQueryClient()
  const [disabled, setDisabled] = useState(true)
  const [banReason, setBanReason] = useState('')
  const [banLength, setBanLength] = useState('')
  const [banLengthInTimeStamp, setBanLengthInTimeStamp] = useState('')

  const banPlayerMutation = useMutation(
    () => banPlayer(steamId, banLength, banLengthInTimeStamp, banReason, name),
    {
      onSuccess: () => queryClient.invalidateQueries(['player']),
    }
  )

  const { data: optionsData } = useQuery(['options'], fetchGetRules)

  const squadLeadersOptions = optionsData
    ?.find((group: any) => group.name === 'squadLeadersOptions')
    ?.rules.map((rule: any) => ({
      value: rule.name,
      label: rule.name,
    }))

  const technicalOptions = optionsData
    ?.find((group: any) => group.name === 'technicalOptions')
    ?.rules.map((rule: any) => ({
      value: rule.name,
      label: rule.name,
    }))

  const allPlayersOptions = optionsData
    ?.find((group: any) => group.name === 'allPlayersOptions')
    ?.rules.map((rule: any) => ({
      value: rule.name,
      label: rule.name,
    }))

  const groupedOptions = [
    {
      label: 'Правила для сквадных',
      options: squadLeadersOptions,
    },
    {
      label: 'Правила для техники',
      options: technicalOptions,
    },
    {
      label: 'Правила для всех',
      options: allPlayersOptions,
    },
  ]

  const handleChangeReason = (selectedOption: any) => {
    setBanReason(selectedOption.value)
  }

  const handleChangeLength = (selectedOption: any) => {
    setBanLength(selectedOption.value.banLength)
    setBanLengthInTimeStamp(selectedOption.value.banLengthInTimeStamp)
  }

  const handleClick = () => {
    if (banReason === '') {
      alert('Выберите причину бана!')
    } else if (banLength === '') {
      alert('Выберите срок бана!')
    } else {
      banPlayerMutation.mutate()
    }
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <Select
          styles={customSelectorStyles}
          options={groupedOptions}
          onChange={handleChangeReason}
          placeholder={'Выберите причину'}
          menuPlacement={'top'}
          isSearchable={false}
        />
      </div>
      <div className={styles.container}>
        <Select
          className={styles.length}
          styles={customSelectorStyles}
          options={banLengthOptions}
          onChange={handleChangeLength}
          placeholder={'Выберите срок'}
          menuPlacement={'top'}
          isSearchable={false}
        />
        <button className={styles.button} onClick={handleClick}>
          ЗАБАНИТЬ
        </button>
      </div>
    </div>
  )
}
