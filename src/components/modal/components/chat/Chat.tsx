import React from 'react'
import styles from './Chat.module.scss'
import { ChatRow } from './ChatRow'
import { useQuery } from '@tanstack/react-query'
import { fetchPlayerMessages } from 'api/users'
import { Spinner } from 'components/spinner/Spinner'

interface Props {
  playerSteamId: string
}

export function Chat({ playerSteamId }: Props) {
  const {
    data: messages,
    isSuccess,
    isLoading,
  } = useQuery(['players', playerSteamId, 'messages'], () =>
    fetchPlayerMessages(playerSteamId)
  )

  return (
    <div className={styles.wrapper}>
      {isLoading && <Spinner />}
      {isSuccess && (
        <>
          {messages?.map((message) => (
            <ChatRow key={message.id} message={message} />
          ))}
        </>
      )}
    </div>
  )
}
