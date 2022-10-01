import React from 'react'
import styles from 'pages/players/Players.module.scss'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchPlayers } from 'api/users'
import { PlayersTable } from 'pages/players/PlayersTable'
import { useSearchParams } from 'react-router-dom'

type pageNumbers = number[]

export function Players() {
  const queryClient = useQueryClient()
  const [searchParams, setSearchParams] = useSearchParams()

  const page = +(searchParams.get('page') ?? 1)
  const {
    data: players,
    isSuccess,
    isError,
  } = useQuery(['players', page - 1], () => fetchPlayers(page - 1), {
    keepPreviousData: true,
  })

  queryClient.prefetchQuery([players, page], () => fetchPlayers(page))

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
    if (!players?.totalPages) return
    const arr = []
    if (players?.totalPages - 2 < amount || page - amount / 2 < 1) {
      const startPage = 2
      for (let i = startPage; i < startPage + amount; i++) arr.push(i)
      return arr
    }
    if (page + amount / 2 > players.totalPages) {
      const startPage = players.totalPages - amount
      for (let i = startPage; i < players.totalPages; i++) arr.push(i)
      return arr
    }

    const startPage = page - 5
    for (let i = startPage; i < startPage + amount; i++) arr.push(i)
    return arr
  }

  if (!isSuccess) {
    return <h1>Загрузка игроков</h1>
  }

  if (isError) {
    return <h1>Ошибка загрузки игроков</h1>
  }

  const pageNumbers = generatePageNumbers(page, 11)

  return (
    <div className={styles.wrapper}>
      <div className={styles.tableWrapper}>
        <PlayersTable content={players.content} />
        <div className={styles.pagination}>
          <button
            className={styles.pageNumberBtn}
            onClick={prevPage}
            disabled={!players?.hasPrevious}
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
          {pageNumbers?.[pageNumbers.length - 1] !==
            players?.totalPages - 1 && (
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
            onClick={() => setPage(players?.totalPages)}
          >
            {players?.totalPages}
          </button>
          <button
            className={styles.pageNumberBtn}
            onClick={nextPage}
            disabled={!players?.hasNext}
          >
            +
          </button>
        </div>
        <div className={styles.counter}>
          Всего игроков: {players?.totalElements}
        </div>
      </div>
    </div>
  )
}
