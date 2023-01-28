import React, { useContext, useEffect, useState } from 'react'
import styles from './Header.module.scss'
import { VscServer } from 'react-icons/vsc'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchPlayerSearch } from 'api/users'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { LogoutBtn } from 'components/buttons'
import { Navbar } from 'components/navbar/Navbar'
import useDebounce from 'components/debounce/useDebounce'
import toast from 'react-hot-toast'
import BackendStatusItem from 'components/header/BackendStatusItem'
import { fetchBackendStatus } from 'api/admins'
import { errorToast } from 'utils/toasts'

function Header() {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const queryClient = useQueryClient()
  const [searchPlayer, setSearchPlayer] = useState('')
  const [foundPlayers, setFoundPlayers] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  const debouncedSearch = useDebounce(searchPlayer, 300)

  const searchPlayerMutation = useMutation(
    () => fetchPlayerSearch(searchPlayer.toString()),
    {
      // onSuccess: () => queryClient.invalidateQueries(['players']),
      onSuccess: (data) => setFoundPlayers(data),
    }
  )

  const { data: backend } = useQuery(['backend'], fetchBackendStatus, {
    onError: (e) => errorToast('Ошибка загрузки статуса работы бекенда'),
    keepPreviousData: true,
    refetchInterval: 3000,
  })

  useEffect(() => {
    if (debouncedSearch) {
      setIsSearching(true)
      searchPlayerMutation.mutate()
    }
  }, [debouncedSearch])

  const handleSearch = (e: any) => {
    setSearchPlayer(e.target.value.toLowerCase())
  }

  const handleClick = (steamId: string) => {
    setPlayerModal(steamId)
    setSearchPlayer('')
  }

  const server = localStorage.getItem('server')

  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <Navbar />
      </div>
      <div className={styles.search}>
        <input
          className={styles.input}
          type="search"
          value={searchPlayer}
          placeholder={'поиск игрока'}
          onChange={handleSearch}
        />
        {searchPlayer && (
          <div className={styles.data}>
            {foundPlayers?.map((player: any, index: number) => (
              <div
                key={index}
                className={styles.item}
                onClick={() => handleClick(player.steamId)}
              >
                <span>
                  {player.name} {player.steamId}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.logout}>
        <div
          className={styles.switch}
          style={{
            alignItems: 'center',
            gap: '0.3rem',
            backgroundColor: 'black',
            padding: '0.3rem',
            borderRadius: 10,
          }}
        >
          <span>тестовый блок выбора сервера</span>
          <button
            onClick={() => {
              localStorage.setItem('server', String(8000))
              window.location.reload()
            }}
            style={{
              all: 'unset',
              backgroundColor: server === '8000' ? 'green' : 'gray',
              padding: '0.3rem',
              borderRadius: 10,
            }}
          >
            ОС1
          </button>
          <button
            onClick={() => {
              localStorage.setItem('server', String(8001))
              window.location.reload()
            }}
            style={{
              all: 'unset',
              backgroundColor: server === '8001' ? 'green' : 'gray',
              padding: '0.3rem',
              borderRadius: 10,
            }}
          >
            ОС2
          </button>
        </div>
        <VscServer
          className={styles.backend}
          style={{
            marginRight: '1rem',
            fontSize: '2rem',
            opacity: 0.5,
            cursor: 'pointer',
          }}
          onClick={() =>
            toast(
              (t) => (
                <div className={styles.backendToast}>
                  <BackendStatusItem backendInfo={backend.FtpBanService}>
                    FtpBanService
                  </BackendStatusItem>
                  <BackendStatusItem backendInfo={backend.FtpLogTailer}>
                    FtpLogTailer
                  </BackendStatusItem>
                  <BackendStatusItem backendInfo={backend.QueryUpdater}>
                    QueryUpdater
                  </BackendStatusItem>
                  <BackendStatusItem backendInfo={backend.RconUpdater}>
                    RconUpdater
                  </BackendStatusItem>
                </div>
              ),
              {
                position: 'top-right',
                style: {
                  marginTop: '3rem',
                },
              }
            )
          }
        />
        <LogoutBtn />
      </div>
    </div>
  )
}

export default Header
