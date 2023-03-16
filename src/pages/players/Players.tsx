import React, { useState } from 'react'
import styles from 'pages/players/Players.module.scss'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchPlayers } from 'api/users'
import { PlayersTable } from 'pages/players/PlayersTable'
import { Outlet, useSearchParams } from 'react-router-dom'
import { Loader, Pagination } from 'rsuite'

type pageNumbers = number[]

export function Players() {
  const queryClient = useQueryClient()
  const [activePage, setActivePage] = useState(1)

  const pageLimit = 30

  const {
    data: players,
    isSuccess,
    isError,
  } = useQuery(
    ['players', activePage - 1],
    () => fetchPlayers(activePage - 1, pageLimit),
    {
      keepPreviousData: true,
    }
  )

  // пример использования toast по статусу промиса
  // toast.promise(Promise.all(status), {
  //   loading: 'Loading',
  //   success: 'Got the data',
  //   error: 'Error when fetching',
  // })

  if (!isSuccess) {
    return <Loader size="lg" backdrop content="загрузка..." vertical />
  }

  if (isError) {
    return <h1>Ошибка загрузки игроков</h1>
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.tableWrapper}>
        <PlayersTable content={players.content} />
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
          total={players?.totalElements}
          limit={pageLimit}
          activePage={activePage}
          onChangePage={(e: any) => setActivePage(e)}
        />
      </div>
    </div>
  )
}
