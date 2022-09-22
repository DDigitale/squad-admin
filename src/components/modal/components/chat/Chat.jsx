import React from 'react'
import { ChatRow } from './ChatRow'
import { useQuery } from '@tanstack/react-query'
import { fetchPlayerMessages } from '../../../../api/Users'

export function Chat({ player }) {
  console.log('player in chat', player)

  const {
    data: messages,
    isSuccess,
    isError,
    isLoading,
  } = useQuery(['players', player.steamId, 'messages'], () =>
    fetchPlayerMessages(player.steamId)
  )

  console.log('chat in player', messages)

  return (
    <div>
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
