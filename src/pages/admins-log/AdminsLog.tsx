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
  Pagination,
  SelectPicker,
} from 'rsuite'

type pageNumbers = number[]

const listActions = [
  { value: 'AddAdmin', label: 'AddAdmin' },
  { value: 'AddNewPlayer', label: 'AddNewPlayer' },
  { value: 'AddPlayerNote', label: 'AddPlayerNote' },
  { value: 'AddPlayerOnControl', label: 'AddPlayerOnControl' },
  { value: 'BanPlayer', label: 'BanPlayer' },
  { value: 'ChangeCurrentLayer', label: 'ChangeCurrentLayer' },
  { value: 'ChangeNextLayer', label: 'ChangeNextLayer' },
  { value: 'DeactivateAdmin', label: 'DeactivateAdmin' },
  { value: 'DeletePlayerNote', label: 'DeletePlayerNote' },
  { value: 'DisbandSquad', label: 'DisbandSquad' },
  { value: 'KickPlayer', label: 'KickPlayer' },
  { value: 'PlayerTeamChange', label: 'PlayerTeamChange' },
  { value: 'RemovePlayerFromControl', label: 'RemovePlayerFromControl' },
  { value: 'SendBroadcast', label: 'SendBroadcast' },
  { value: 'Unban', label: 'Unban' },
  { value: 'WarnSquad', label: 'WarnSquad' },
  { value: 'WarnPlayer', label: 'WarnPlayer' },
]

const initialStateActions = listActions.map((action) => action.value)
const initialDateFrom = 1577826000000
const initialDateTo = 1893445200000

export function AdminsLog() {
  const [activePage, setActivePage] = useState(1)
  const [searchPlayer, setSearchPlayer] = useState('')
  const [searchPlayerInInput, setSearchPlayerInInput] = useState('')
  const [searchAdmin, setSearchAdmin] = useState('')
  const [foundPlayers, setFoundPlayers] = useState([])
  const [searchAction, setSearchAction] = useState(initialStateActions)
  const [searchDateFrom, setSearchDateFrom] = useState(initialDateFrom)
  const [searchDateTo, setSearchDateTo] = useState(initialDateTo)
  const debouncedSearch = useDebounce(
    searchPlayerInInput ||
      searchAdmin ||
      searchPlayer ||
      searchAction ||
      searchDateFrom ||
      searchDateTo,
    300
  )

  const pageLimit = 30

  const {
    data: admins,
    isSuccess,
    refetch,
  } = useQuery(
    ['admins', activePage - 1],
    () =>
      fetchAdminsLog(
        activePage - 1,
        pageLimit,
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
          total={admins?.totalElements}
          limit={pageLimit}
          activePage={activePage}
          onChangePage={(e: any) => setActivePage(e)}
        />
      </div>
    </div>
  )
}

// const [searchParams, setSearchParams] = useSearchParams()

// const page = +(searchParams.get('page') ?? 1)

// const setPage = (page: number) => {
//   setSearchParams({ page: page.toString() })
// }
//
// const nextPage = () => {
//   setPage(page + 1)
// }
//
// const prevPage = () => {
//   const nextPage = page - 1
//   if (nextPage === 1) {
//     searchParams.delete('page')
//     setSearchParams(searchParams)
//   } else {
//     setPage(page - 1)
//   }
// }

// const generatePageNumbers = (
//     page: number,
//     amount: number
// ): pageNumbers | undefined => {
//   if (!admins?.totalPages) return
//   const arr = []
//   if (admins?.totalPages - 2 < amount || page - amount / 2 < 1) {
//     const startPage = 2
//     for (let i = startPage; i < startPage + amount; i++) arr.push(i)
//     return arr
//   }
//   if (page + amount / 2 > admins.totalPages) {
//     const startPage = admins.totalPages - amount
//     for (let i = startPage; i < admins.totalPages; i++) arr.push(i)
//     return arr
//   }
//
//   const startPage = page - 5
//   for (let i = startPage; i < startPage + amount; i++) arr.push(i)
//   return arr
// }

// const pageNumbers = generatePageNumbers(page, 11)

// <div className={styles.pagination}>
//     <button
//         className={styles.pageNumberBtn}
//         onClick={prevPage}
//         disabled={!admins?.hasPrevious}
//     >
//         -
//     </button>
//     <button className={styles.pageNumberBtn} onClick={() => setPage(1)}>
//         {1}
//     </button>
//     {pageNumbers?.[0] !== 2 && (
//         <button
//             key={'first'}
//             disabled={true}
//             className={styles.pageNumberBtn}
//         >
//             ...
//         </button>
//     )}
//
//     {pageNumbers?.map((pageNumber) => (
//         <button
//             className={styles.pageNumberBtn}
//             key={pageNumber}
//             disabled={pageNumber === page}
//             onClick={() => setPage(pageNumber)}
//         >
//             {pageNumber}
//         </button>
//     ))}
//     {pageNumbers?.[pageNumbers.length - 1] !== admins?.totalPages - 1 && (
//         <button
//             key={'last'}
//             disabled={true}
//             className={styles.pageNumberBtn}
//         >
//             ...
//         </button>
//     )}
//     <button
//         className={styles.pageNumberBtn}
//         onClick={() => setPage(admins?.totalPages)}
//     >
//         {admins?.totalPages}
//     </button>
//     <button
//         className={styles.pageNumberBtn}
//         onClick={nextPage}
//         disabled={!admins?.hasNext}
//     >
//         +
//     </button>
// </div>
// <div className={styles.counter}>
//     Всего действий: {admins?.totalElements}
// </div>
