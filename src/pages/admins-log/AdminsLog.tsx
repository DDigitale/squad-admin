import React, { useEffect, useState } from 'react'
import styles from './AdminsLog.module.scss'
import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchAdmins, fetchAdminsLog, fetchPlayerSearch } from 'api/users'
import { useSearchParams } from 'react-router-dom'
import { AdminsLogTable } from 'pages/admins-log/AdminsLogTable'
import useDebounce from 'components/debounce/useDebounce'
import {
  CheckPicker,
  DatePicker,
  InputPicker,
  Loader,
  SelectPicker,
} from 'rsuite'

type pageNumbers = number[]

const listActions = [
  { value: 'BanPlayer', label: 'BanPlayer' },
  { value: 'Unban', label: 'Unban' },
  { value: 'KickPlayer', label: 'KickPlayer' },
  { value: 'WarnPlayer', label: 'WarnPlayer' },
  { value: 'SendBroadcast', label: 'SendBroadcast' },
  { value: 'DisbandSquad', label: 'DisbandSquad' },
  { value: 'AddPlayerNote', label: 'AddPlayerNote' },
  { value: 'DeletePlayerNote', label: 'DeletePlayerNote' },
  { value: 'PlayerTeamChange', label: 'PlayerTeamChange' },
]

const initialStateActions = listActions.map((action) => action.value)
const initialDateFrom = 1577826000000
const initialDateTo = 1893445200000

export function AdminsLog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchPlayer, setSearchPlayer] = useState('')
  const [searchPlayerInInput, setSearchPlayerInInput] = useState('')
  const [searchAdmin, setSearchAdmin] = useState('')
  const [foundPlayers, setFoundPlayers] = useState([])
  const [searchAction, setSearchAction] = useState(initialStateActions)
  const [searchDateFrom, setSearchDateFrom] = useState(initialDateFrom)
  const [searchDateTo, setSearchDateTo] = useState(initialDateTo)
  const debouncedSearch = useDebounce(
    searchPlayer ||
      searchAction ||
      searchAdmin ||
      searchPlayerInInput ||
      searchDateFrom ||
      searchDateTo,
    300
  )

  const page = +(searchParams.get('page') ?? 1)

  const {
    data: admins,
    isSuccess,
    refetch,
  } = useQuery(
    ['admins', page - 1],
    () =>
      fetchAdminsLog(
        page - 1,
        searchAdmin,
        searchPlayer,
        searchAction,
        searchDateFrom,
        searchDateTo
      ),
    {
      keepPreviousData: true,
    }
  )

  const searchPlayerMutation = useMutation(
    () => fetchPlayerSearch(searchPlayerInInput.toString()),
    {
      onSuccess: (data) => setFoundPlayers(data),
    }
  )

  const { data: adminsList } = useQuery(['admin-steamIds'], fetchAdmins)

  const adminList = adminsList?.map((v: any) => ({
    value: v.steamId,
    label: v.name,
  }))

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

  useEffect(() => {
    if (debouncedSearch) {
      refetch()
    }
    if (debouncedSearch === null) {
      refetch()
    }
    if (searchAction.length === 0) {
      setSearchAction(initialStateActions)
      refetch()
    }
    if (!searchPlayer) {
      refetch()
    }

    if (debouncedSearch) {
      searchPlayerMutation.mutate()
    }
  }, [
    debouncedSearch,
    searchAdmin,
    searchAction,
    searchPlayerInInput,
    searchPlayer,
    searchDateFrom,
    searchDateTo,
  ])

  if (!isSuccess) {
    return <Loader size="lg" backdrop content="загрузка..." vertical />
  }

  const pageNumbers = generatePageNumbers(page, 11)

  return (
    <div className={styles.wrapper}>
      <div className={styles.menuWrapper}>
        <SelectPicker
          style={{ width: '200px' }}
          data={adminList}
          value={searchAdmin}
          onChange={(e: any) => setSearchAdmin(e)}
          placeholder="Поиск по админам"
          cleanable={true}
        />
        <CheckPicker
          searchable={false}
          style={{ width: '200px' }}
          data={listActions}
          placeholder="Поиск по действиям"
          onChange={(e: any) => setSearchAction(e)}
        />

        <InputPicker
          data={foundPlayers}
          labelKey="name"
          valueKey="steamId"
          onSearch={(e) => {
            setSearchPlayerInInput(e)
            searchPlayerMutation.mutate()
          }}
          onChange={(e: any) => setSearchPlayer(e)}
          placeholder="Поиск по игрокам"
        />
        <DatePicker
          format="yyyy-MM-dd HH:mm"
          style={{ width: 180, border: 'none' }}
          cleanable={true}
          placeholder="От..."
          onOk={(e: any) => setSearchDateFrom(Date.parse(e))}
          onClean={() => setSearchDateFrom(initialDateFrom)}
        />
        <DatePicker
          format="yyyy-MM-dd HH:mm"
          style={{ width: 180, border: 'none' }}
          cleanable={true}
          placeholder="До..."
          onOk={(e: any) => setSearchDateTo(Date.parse(e))}
          onClean={() => setSearchDateTo(initialDateTo)}
        />
      </div>
      <div className={styles.tableWrapper}>
        <AdminsLogTable content={admins?.content} />
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
          Всего действий: {admins?.totalElements}
        </div>
      </div>
    </div>
  )
}
