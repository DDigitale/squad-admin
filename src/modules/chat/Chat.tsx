import React, { useEffect, useRef } from 'react'
import styles from './Chat.module.scss'
import { useQuery } from '@tanstack/react-query'
import { fetchChatMessages } from 'api/users'
import { ChatRow } from 'modules/chat/ChatRow'
import { Card } from 'components'
import { errorToast } from 'utils/toasts'
import toast from 'react-hot-toast'
import { Broadcast } from 'modules/broadcast/Broadcast'

export function Chat() {
  const chatRef = useRef<null | HTMLDivElement>(null)

  const {
    data: chatMessages,
    isSuccess,
    isError,
  } = useQuery(['chatMessages'], fetchChatMessages, {
    onError: (e: any) => errorToast('Ошибка загрузки чата'),
    refetchInterval: 3000,
  })

  useEffect(() => {
    isSuccess &&
      chatRef.current?.scrollIntoView({
        behavior: 'smooth',
      })
  }, [chatMessages?.length])

  return (
    <Card className={styles.chatCard}>
      <Broadcast />
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
