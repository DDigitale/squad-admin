import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { warnPlayer } from 'api/users'
import styles from './WarnForm.module.scss'
import CreatableSelect from 'react-select/creatable'
import { customSelectorStyles } from 'components/forms/SelectorStyles'
import { fetchGetRules } from 'api/admins'

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
    setWarnReason(selectedOption.value)
  }

  const handleMutate = () => {
    if (warnReason === '') {
      alert('Выберите или введите сообщение!')
    } else {
      warnPlayerMutation.mutate()
      const interval = setInterval(() => warnPlayerMutation.mutate(), 10000)
      setTimeout(function () {
        clearInterval(interval)
      }, 20000)
    }
  }

  return (
    <div className={styles.wrapper}>
      <CreatableSelect
        options={groupedOptions}
        onChange={handleChange}
        styles={customSelectorStyles}
        placeholder={'Выберите или введите сообщение'}
        menuPlacement={'top'}
        isClearable
      />
      <div className={styles.container}>
        <button className={styles.button} onClick={handleMutate}>
          ОТПРАВИТЬ
        </button>
      </div>
    </div>
  )
}
