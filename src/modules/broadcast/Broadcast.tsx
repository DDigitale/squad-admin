import React, { useState } from 'react'
import styles from './Broadcast.module.scss'
import { VscChevronRight } from 'react-icons/vsc'
import CreatableSelect from 'react-select/creatable'
import { customSelectorStyles } from 'components/forms/SelectorStyles'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { sendBroadcastMessage, warnPlayer } from 'api/users'
import { broadcastOptions, groupedOptions } from 'api/local/options'

export function Broadcast() {
  const queryClient = useQueryClient()
  const [broadcastMessage, setBroadcastMessage] = useState('')

  const broadcastMutation = useMutation(
    () => sendBroadcastMessage(broadcastMessage),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  const handleChange = (selectedOption: any) => {
    setBroadcastMessage(selectedOption.value)
  }

  return (
    <div className={styles.wrapper}>
      <CreatableSelect
        options={groupedOptions}
        className={styles.input}
        onChange={handleChange}
        styles={customSelectorStyles}
        placeholder={'Выберите или введите сообщение'}
      />
      <button
        className={styles.button}
        onClick={() => broadcastMutation.mutate()}
      >
        <VscChevronRight />
      </button>
    </div>
  )
}
