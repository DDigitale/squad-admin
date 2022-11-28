import React, { useEffect, useState } from 'react'
import styles from './Bans.module.scss'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchAllBans } from 'api/users'
import { useSearchParams } from 'react-router-dom'
import { Spinner } from 'components/spinner/Spinner'
import BansTable from 'pages/bans/BansTable'
import { log } from 'util'

function Bans() {
  const queryClient = useQueryClient()
  const [searchParams, setSearchParams] = useSearchParams()

  const [activeBans, setActiveBans] = useState(true)

  const page = +(searchParams.get('page') ?? 1)

  const {
    data: bans,
    isLoading,
    isSuccess,
    isError,
    refetch,
  } = useQuery(['bans', page - 1], () => fetchAllBans(page - 1, activeBans))

  // queryClient.prefetchQuery([bans, page], () => fetchAllBans(page, activeBans))

  useEffect(() => {
    refetch()
  }, [activeBans])

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

  const generatePageNumbers = (page: number, amount: number) => {
    if (!bans?.totalPages) return
    const arr = []
    if (bans?.totalPages - 2 < amount || page - amount / 2 < 1) {
      const startPage = 2
      for (let i = startPage; i < startPage + amount; i++) arr.push(i)
      return arr
    }
    if (page + amount / 2 > bans.totalPages) {
      const startPage = bans.totalPages - amount
      for (let i = startPage; i < bans.totalPages; i++) arr.push(i)
      return arr
    }

    const startPage = page - 5
    for (let i = startPage; i < startPage + amount; i++) arr.push(i)
    return arr
  }

  if (!isSuccess) {
    return <Spinner />
  }

  const pageNumbers = generatePageNumbers(page, bans.totalPages - 1)

  return (
    <div className={styles.wrapper}>
      <div className={styles.menuWrapper}>
        <label>Только активные баны</label>
        <input
          type="checkbox"
          onChange={() => setActiveBans(!activeBans)}
          checked={activeBans}
        />
      </div>
      <div className={styles.tableWrapper}>
        <BansTable content={bans?.content} />
        {bans.hasNext && (
          <div className={styles.pagination}>
            <button
              className={styles.pageNumberBtn}
              onClick={prevPage}
              disabled={!bans?.hasPrevious}
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
            {pageNumbers?.[pageNumbers.length - 1] !== bans?.totalPages - 1 && (
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
              onClick={() => setPage(bans?.totalPages)}
            >
              {bans?.totalPages}
            </button>
            <button
              className={styles.pageNumberBtn}
              onClick={nextPage}
              disabled={!bans?.hasNext}
            >
              +
            </button>
          </div>
        )}

        <div className={styles.counter}>Всего банов: {bans?.totalElements}</div>
      </div>
    </div>
  )
}

export default Bans
