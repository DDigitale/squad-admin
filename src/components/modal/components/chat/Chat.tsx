import React, { useState } from 'react'
import styles from './Chat.module.scss'
import { ChatRow } from './ChatRow'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchPlayerMessages } from 'api/users'
import { Loader, Pagination } from 'rsuite'

interface Props {
  playerSteamId: string
}

export function Chat({ playerSteamId }: Props) {
  const [activePage, setActivePage] = useState(1)
  const [pageLimit, setPageLimit] = useState(30)

  const {
    data: messages,
    isSuccess,
    isLoading,
  } = useQuery(['players', playerSteamId, activePage, 'messages'], () =>
    fetchPlayerMessages(playerSteamId, activePage, pageLimit)
  )

  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <Loader size="md" center={true} content="загрузка..." vertical />
      )}
      {isSuccess && (
        <>
          {messages.content?.map((message: any) => (
            <ChatRow key={message.id} message={message} />
          ))}
          <Pagination
            style={{ margin: '0 auto', padding: '0.5rem' }}
            layout={['pager', '|', 'total']}
            prev
            last
            next
            first
            ellipsis
            maxButtons={5}
            boundaryLinks
            size="sm"
            total={messages.totalElements}
            limit={pageLimit}
            activePage={activePage}
            onChangePage={(e: any) => setActivePage(e)}
          />
        </>
      )}
    </div>
  )
}
