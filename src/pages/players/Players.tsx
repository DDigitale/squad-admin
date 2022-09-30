import React, { useEffect, useState } from 'react'
import styles from 'pages/players/Players.module.scss'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchPlayers } from 'api/users'
import { PlayersTable } from 'pages/players/PlayersTable'
import { useSearchParams } from 'react-router-dom'

export function Players() {
  const queryClient = useQueryClient()
  const [qwe] = useSearchParams()
  console.log('123', qwe)
  const [page, setPage] = useState(0)
  const {
    data: players,
    isSuccess,
    isError,
  } = useQuery(['players', page], () => fetchPlayers(page), {
    keepPreviousData: true,
  })

  const nextPage = () => setPage((prev) => prev + 1)
  const prevPage = () => setPage((prev) => prev - 1)

  console.log(players)

  if (!isSuccess) {
    return <h1>Загрузка игроков</h1>
  }

  if (isError) {
    return <h1>Ошибка загрузки игроков</h1>
  }

  return (
    <div className={styles.wrapper}>
      <PlayersTable content={players.content} />
      <button onClick={prevPage} disabled={!players?.hasPrevious}>
        -
      </button>
      <div>Текущая страница: {page + 1}</div>

      <button onClick={nextPage} disabled={!players?.hasNext}>
        +
      </button>
      <div>Всего элементов: {players?.totalElements}</div>
      <div>Всего страниц: {players?.totalPages}</div>
    </div>
  )
}
