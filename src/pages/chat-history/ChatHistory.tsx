import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchChatHistory } from 'api/users'
import styles from './ChatHistory.module.scss'
import ChatHistoryTable from 'pages/chat-history/ChatHistoryTable'
import useDebounce from 'components/debounce/useDebounce'
import { Loader, Pagination } from 'rsuite'

function ChatHistory() {
  const [searchParam, setSearchParam] = useState('')
  const [activePage, setActivePage] = useState(1)
  const debouncedSearch = useDebounce(searchParam, 300)

  const pageLimit = 30

  const {
    data: chat,
    isSuccess,
    refetch,
  } = useQuery(
    ['chat-history', activePage - 1],
    () => fetchChatHistory(activePage - 1, pageLimit, searchParam.toString()),
    {
      keepPreviousData: true,
    }
  )

  useEffect(() => {
    if (debouncedSearch) {
      refetch()
    }
    if (searchParam === '') {
      refetch()
    }
  }, [debouncedSearch])

  if (!isSuccess) {
    return <Loader size="lg" backdrop content="загрузка..." vertical />
  }

  const handleSearch = (e: any) => {
    setSearchParam(e.target.value.toLowerCase())
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.menuWrapper}>
        <label>Поиск по игроку или сообщению</label>
        <input
          value={searchParam}
          onChange={handleSearch}
          type="text"
          placeholder="Введите текст..."
        />
      </div>
      <div className={styles.tableWrapper}>
        <ChatHistoryTable content={chat?.content} />
        <Pagination
          style={{ margin: '0 auto', padding: '0.5rem' }}
          layout={['pager', '|', 'total']}
          prev
          last
          next
          first
          ellipsis
          maxButtons={10}
          boundaryLinks
          size="md"
          total={chat?.totalElements}
          limit={pageLimit}
          activePage={activePage}
          onChangePage={(e: any) => setActivePage(e)}
        />
      </div>
    </div>
  )
}

export default ChatHistory
