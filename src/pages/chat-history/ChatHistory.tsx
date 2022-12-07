import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchChatHistory } from 'api/users'
import { useSearchParams } from 'react-router-dom'
import { Spinner } from 'components/spinner/Spinner'
import styles from './ChatHistory.module.scss'
import ChatHistoryTable from 'pages/chat-history/ChatHistoryTable'
import useDebounce from 'components/debounce/useDebounce'

type pageNumbers = number[]

function ChatHistory() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchParam, setSearchParam] = useState('')
  const debouncedSearch = useDebounce(searchParam, 300)

  const page = +(searchParams.get('page') ?? 1)

  const {
    data: chat,
    isLoading,
    isSuccess,
    isError,
    refetch,
  } = useQuery(
    ['chat-history', page - 1],
    () => fetchChatHistory(page - 1, searchParam.toString()),
    {
      keepPreviousData: true,
    }
  )

  const setPage = (page: number) => {
    setSearchParams({ page: page.toString() })
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  const prevPage = () => {
    const nextPage = page - 1
    if (nextPage === 1) {
      searchParams.delete('page')
      setSearchParams(searchParams)
    } else {
      setPage(page - 1)
    }
  }

  const generatePageNumbers = (
    page: number,
    amount: number
  ): pageNumbers | undefined => {
    if (!chat?.totalPages) return
    const arr = []
    if (chat?.totalPages - 2 < amount || page - amount / 2 < 1) {
      const startPage = 2
      for (let i = startPage; i < startPage + amount; i++) arr.push(i)
      return arr
    }
    if (page + amount / 2 > chat.totalPages) {
      const startPage = chat.totalPages - amount
      for (let i = startPage; i < chat.totalPages; i++) arr.push(i)
      return arr
    }

    const startPage = page - 5
    for (let i = startPage; i < startPage + amount; i++) arr.push(i)
    return arr
  }

  useEffect(() => {
    if (debouncedSearch) {
      refetch()
    }
    if (searchParam === '') {
      refetch()
    }
  }, [debouncedSearch])

  if (!isSuccess) {
    return <Spinner />
  }

  const pageNumbers = generatePageNumbers(page, 11)

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
        <div className={styles.pagination}>
          <button
            className={styles.pageNumberBtn}
            onClick={prevPage}
            disabled={!chat?.hasPrevious}
          >
            -
          </button>
          <button className={styles.pageNumberBtn} onClick={() => setPage(1)}>
            {1}
          </button>
          {pageNumbers?.[0] !== 2 && (
            <button
              key={'first'}
              disabled={true}
              className={styles.pageNumberBtn}
            >
              ...
            </button>
          )}

          {pageNumbers?.map((pageNumber) => (
            <button
              className={styles.pageNumberBtn}
              key={pageNumber}
              disabled={pageNumber === page}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
          {pageNumbers?.[pageNumbers.length - 1] !== chat?.totalPages - 1 && (
            <button
              key={'last'}
              disabled={true}
              className={styles.pageNumberBtn}
            >
              ...
            </button>
          )}
          <button
            className={styles.pageNumberBtn}
            onClick={() => setPage(chat?.totalPages)}
          >
            {chat?.totalPages}
          </button>
          <button
            className={styles.pageNumberBtn}
            onClick={nextPage}
            disabled={!chat?.hasNext}
          >
            +
          </button>
        </div>
        <div className={styles.counter}>
          Всего сообщений: {chat?.totalElements}
        </div>
      </div>
    </div>
  )
}

export default ChatHistory
