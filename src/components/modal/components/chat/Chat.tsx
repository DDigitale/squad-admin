import React from 'react'
import styles from './Chat.module.scss'
import { ChatRow } from './ChatRow'
import { useQuery } from '@tanstack/react-query'
import { fetchPlayerMessages } from '../../../../api/users'

interface Props {
  playerSteamId: string
}

export function Chat({ playerSteamId }: Props) {
  console.log('player in chat', playerSteamId)

  const { data: messages, isSuccess } = useQuery(
    ['players', playerSteamId, 'messages'],
    () => fetchPlayerMessages(playerSteamId)
  )

  console.log('chat in player', messages)

  return (
    <div className={styles.wrapper}>
      {isSuccess && (
        <>
          {messages.map((message) => (
            <ChatRow key={message.id} message={message} />
          ))}
        </>
      )}
    </div>
  )
}
