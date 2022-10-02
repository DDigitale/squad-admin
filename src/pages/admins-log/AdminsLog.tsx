import React from 'react'
import styles from '../players/Players.module.scss'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchAdminsLog } from 'api/users'
import { useSearchParams } from 'react-router-dom'
import { AdminsLogTable } from 'pages/admins-log/AdminsLogTable'

type pageNumbers = number[]

export function AdminsLog() {
  const queryClient = useQueryClient()
  const [searchParams, setSearchParams] = useSearchParams()

  const page = +(searchParams.get('page') ?? 1)

  const {
    data: admins,
    isSuccess,
    isError,
  } = useQuery(['admins', page - 1], () => fetchAdminsLog(page - 1), {
    keepPreviousData: true,
  })

  queryClient.prefetchQuery([admins, page], () => fetchAdminsLog(page))

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
    if (!admins?.totalPages) return
    const arr = []
    if (admins?.totalPages - 2 < amount || page - amount / 2 < 1) {
      const startPage = 2
      for (let i = startPage; i < startPage + amount; i++) arr.push(i)
      return arr
    }
    if (page + amount / 2 > admins.totalPages) {
      const startPage = admins.totalPages - amount
      for (let i = startPage; i < admins.totalPages; i++) arr.push(i)
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
        <AdminsLogTable content={admins.content} />
        <div className={styles.pagination}>
          <button
            className={styles.pageNumberBtn}
            onClick={prevPage}
            disabled={!admins?.hasPrevious}
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
          {pageNumbers?.[pageNumbers.length - 1] !== admins?.totalPages - 1 && (
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
            onClick={() => setPage(admins?.totalPages)}
          >
            {admins?.totalPages}
          </button>
          <button
            className={styles.pageNumberBtn}
            onClick={nextPage}
            disabled={!admins?.hasNext}
          >
            +
          </button>
        </div>
        <div className={styles.counter}>
          Всего наказаний: {admins?.totalElements}
        </div>
      </div>
    </div>
  )
}
