import React, { useEffect, useRef } from 'react'
import styles from './Chat.module.scss'
import { useQuery } from '@tanstack/react-query'
import { fetchChatMessages } from 'api/users'
import { ChatRow } from 'modules/chat/ChatRow'
import { Card } from 'components'

export function Chat() {
  const chatRef = useRef<null | HTMLDivElement>(null)

  const {
    data: chatMessages,
    isSuccess,
    isError,
  } = useQuery(['chatMessages'], fetchChatMessages, {
    refetchInterval: 3000,
  })

  useEffect(() => {
    isSuccess &&
      chatRef.current?.scrollIntoView({
        behavior: 'smooth',
      })
  }, [chatMessages?.length])

  if (!isSuccess) {
    return <h1>Загрузка игроков</h1>
  }

  if (isError) {
    return <h1>Ошибка загрузки игроков</h1>
  }

  return (
    <Card className={styles.chatCard}>
      <div className={styles.wrapper}>
        {/*<div className={styles.content}>*/}
        {chatMessages?.map((message) => (
          // <div ref={chatRef}>
          <ChatRow key={+message.time} message={message} ref={chatRef} />
          // </div>
        ))}
        {/*</div>*/}
      </div>
    </Card>
  )
}
