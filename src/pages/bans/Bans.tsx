import React, { useEffect, useState } from 'react'
import styles from './Bans.module.scss'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  fetchAdmins,
  fetchAllActiveBansByParams,
  fetchAllBansByParams,
  fetchAllNotActiveBansByParams,
  fetchAllPermanentBansByParams,
  fetchPlayerSearch,
} from 'api/users'
import BansTable from 'pages/bans/BansTable'
import BanOffline from 'pages/bans/BanOffline'
import {
  InputPicker,
  Loader,
  Pagination,
  Radio,
  RadioGroup,
  SelectPicker,
} from 'rsuite'
import useDebounce from 'components/debounce/useDebounce'

function Bans() {
  const queryClient = useQueryClient()
  const [activePage, setActivePage] = useState(1)
  const [selectedRadio, setSelectedRadio] = useState('A')
  const [adminSteamId, setAdminSteamId] = useState('')
  const [playerSteamId, setPlayerSteamId] = useState('')
  const [searchPlayerInInput, setSearchPlayerInInput] = useState('')
  const [foundPlayers, setFoundPlayers] = useState([])
  const [bansData, setBansData] = useState<any>()
  const debouncedSearch = useDebounce(searchPlayerInInput, 300)

  const pageLimit = 30

  const { data: adminsList } = useQuery(['admin-steamIds'], fetchAdmins)

  const adminList = adminsList?.map((v: any) => ({
    value: v.steamId,
    label: v.name,
  }))

  const searchPlayerMutation = useMutation(
    () => fetchPlayerSearch(searchPlayerInInput.toString()),
    {
      onSuccess: (data) => setFoundPlayers(data),
    }
  )

  const { refetch: allBans } = useQuery(
    ['all-bans', activePage - 1],
    () =>
      fetchAllBansByParams(
        activePage - 1,
        pageLimit,
        adminSteamId,
        playerSteamId
      ),
    {
      onSuccess: (data) => setBansData(data),
      enabled: selectedRadio === 'A',
    }
  )

  const { refetch: allActiveBans } = useQuery(
    ['all-bans', activePage - 1],
    () =>
      fetchAllActiveBansByParams(
        activePage - 1,
        pageLimit,
        adminSteamId,
        playerSteamId
      ),
    {
      onSuccess: (data) => setBansData(data),
      enabled: selectedRadio === 'B',
    }
  )

  const { refetch: allPermanentBans } = useQuery(
    ['all-bans', activePage - 1],
    () =>
      fetchAllPermanentBansByParams(
        activePage - 1,
        pageLimit,
        adminSteamId,
        playerSteamId
      ),
    {
      onSuccess: (data) => setBansData(data),
      enabled: selectedRadio === 'C',
    }
  )

  const { refetch: allNotActiveBans } = useQuery(
    ['all-bans', activePage - 1],
    () =>
      fetchAllNotActiveBansByParams(
        activePage - 1,
        pageLimit,
        adminSteamId,
        playerSteamId
      ),
    {
      onSuccess: (data) => setBansData(data),
      enabled: selectedRadio === 'D',
    }
  )

  useEffect(() => {
    selectedRadio === 'A' && allBans()
    selectedRadio === 'B' && allActiveBans()
    selectedRadio === 'C' && allPermanentBans()
    selectedRadio === 'D' && allNotActiveBans()
  }, [adminSteamId, playerSteamId, pageLimit])

  useEffect(() => {
    if (debouncedSearch) {
      searchPlayerMutation.mutate()
    }
  }, [debouncedSearch])

  if (!bansData) {
    return <Loader size="lg" backdrop content="загрузка..." vertical />
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.menuWrapper}>
        <div className={styles.activeBans}>
          <RadioGroup
            name="radioList"
            inline
            appearance="picker"
            defaultValue="A"
            value={selectedRadio}
            onChange={(e: any) => setSelectedRadio(e)}
          >
            <Radio value="A">Все баны</Radio>
            <Radio value="B">Активные</Radio>
            <Radio value="C">Перманент</Radio>
            <Radio value="D">Не активные</Radio>
            <Radio value="E">Оффлайн бан</Radio>
          </RadioGroup>
          {selectedRadio === 'E' ? (
            <BanOffline />
          ) : (
            <>
              <SelectPicker
                style={{ width: '200px' }}
                data={adminList}
                value={adminSteamId}
                onChange={(e: any) => setAdminSteamId(e)}
                placeholder="Поиск по админам"
                cleanable={true}
              />
              <InputPicker
                data={foundPlayers}
                labelKey="name"
                valueKey="steamId"
                onSearch={(e) => {
                  setSearchPlayerInInput(e)
                }}
                onChange={(e: any) => setPlayerSteamId(e)}
                placeholder="Поиск по игрокам"
              />
            </>
          )}
        </div>
      </div>
      <div className={styles.tableWrapper}>
        <BansTable content={bansData?.content} />
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
          total={bansData?.totalElements}
          limit={pageLimit}
          activePage={activePage}
          onChangePage={(e: any) => setActivePage(e)}
        />
      </div>
    </div>
  )
}

export default Bans
