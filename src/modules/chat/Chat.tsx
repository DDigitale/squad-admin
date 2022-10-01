import React from 'react'
import styles from './Chat.module.scss'
import { useQuery } from '@tanstack/react-query'
import { fetchChatMessages } from 'api/users'
import { ChatRow } from 'modules/chat/ChatRow'

export function Chat() {
  const {
    data: chatMessages,
    isSuccess,
    isError,
  } = useQuery(['chatMessages'], fetchChatMessages, {
    refetchInterval: 3000,
  })

  if (!isSuccess) {
    return <h1>Загрузка игроков</h1>
  }

  if (isError) {
    return <h1>Ошибка загрузки игроков</h1>
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {chatMessages.map((message) => (
          <ChatRow key={message.time} message={message} />
        ))}
      </div>
    </div>
  )
}
