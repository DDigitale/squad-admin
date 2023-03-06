import React, { useState } from 'react'
import styles from './Broadcast.module.scss'
import { VscChevronRight } from 'react-icons/vsc'
import CreatableSelect from 'react-select/creatable'
import { customSelectorStyles } from 'components/forms/SelectorStyles'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { sendBroadcastMessage } from 'api/users'
import { fetchGetRules } from 'api/admins'

export function Broadcast() {
  const queryClient = useQueryClient()
  const [broadcastMessage, setBroadcastMessage] = useState('')
  const [broadcastOptions, setBroadcastOptions] = useState([])

  const broadcastMutation = useMutation(
    () => sendBroadcastMessage(broadcastMessage),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  const { data: optionsData } = useQuery(['options'], fetchGetRules)

  const filteredOptions = optionsData
    ?.find((group: any) => group.name === 'broadcastOptions')
    ?.rules.map((rule: any) => ({
      value: rule.name,
      label: rule.name,
    }))

  const handleChange = (selectedOption: any) => {
    setBroadcastMessage(selectedOption.value)
  }

  return (
    <div className={styles.wrapper}>
      <CreatableSelect
        onMenuOpen={() => setBroadcastOptions(filteredOptions)}
        options={broadcastOptions}
        className={styles.input}
        onChange={handleChange}
        styles={customSelectorStyles}
        placeholder={'Выберите или введите сообщение'}
      />
      <button
        disabled={broadcastMessage === ''}
        className={styles.button}
        onClick={() => broadcastMutation.mutate()}
      >
        <VscChevronRight />
      </button>
    </div>
  )
}
