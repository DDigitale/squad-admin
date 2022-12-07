import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { kickPlayer } from 'api/users'
import styles from './KickForm.module.scss'
import Select from 'react-select'
import { customSelectorStyles } from 'components/forms/SelectorStyles'
import { fetchGetRules } from 'api/admins'

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
        menuPlacement={'top'}
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
