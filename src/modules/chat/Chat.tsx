import React, { useEffect, useRef, useState } from 'react'
import styles from './Chat.module.scss'
import { useQuery } from '@tanstack/react-query'
import { fetchChatMessages, fetchPlayerKillFeedData } from 'api/users'
import { ChatRow } from 'modules/chat/ChatRow'
import { Card } from 'components'
import { errorToast } from 'utils/toasts'
import { Broadcast } from 'modules/broadcast/Broadcast'
import { KillFeedRow } from 'modules/chat/KillFeedRow'

export function Chat() {
  const [selectedTab, setSelectedTab] = useState(1)
  const chatRef = useRef<null | HTMLDivElement>(null)

  const { data: chatMessages, isSuccess } = useQuery(
    ['chatMessages'],
    fetchChatMessages,
    {
      onError: (e: any) => errorToast('Ошибка загрузки чата'),
      refetchInterval: 3000,
    }
  )

  const { data: killFeedData } = useQuery(
    ['kill-feed'],
    fetchPlayerKillFeedData,
    {
      keepPreviousData: true,
      refetchInterval: 5000,
    }
  )

  const server = localStorage.getItem('server')

  const filtered = killFeedData?.filter(
    (item: any) =>
      (server === 'oc1' && item.server === 1) ||
      (server === 'oc2' && item.server === 2)
  )

  useEffect(() => {
    isSuccess &&
      chatRef.current?.scrollIntoView({
        behavior: 'smooth',
      })
  }, [chatMessages?.length])

  return (
    <Card className={styles.chatCard}>
      <div className={styles.btnsWrapper}>
        <button
          className={styles.btn}
          onClick={() => {
            setSelectedTab(1)
          }}
          style={{
            backgroundColor: selectedTab === 1 ? 'rgba(51,253,217,0.2)' : '',
          }}
        >
          Чат
        </button>
        <button
          style={{
            backgroundColor: selectedTab === 2 ? 'rgba(51,253,217,0.2)' : '',
          }}
          className={styles.btn}
          onClick={() => {
            setSelectedTab(2)
          }}
        >
          Убийства
        </button>
      </div>
      {selectedTab === 1 && (
        <>
          <Broadcast />
          <div className={styles.wrapper}>
            {chatMessages?.map((message) => (
              <ChatRow key={+message.time} message={message} ref={chatRef} />
            ))}
          </div>
        </>
      )}
      {selectedTab === 2 && (
        <div className={styles.wrapper}>
          {filtered?.map((kf: any, index: number) => (
            <KillFeedRow key={index} data={kf} />
          ))}
        </div>
      )}
    </Card>
  )
}
