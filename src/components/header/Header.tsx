import React, { useContext, useEffect, useState } from 'react'
import styles from './Header.module.scss'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  fetchLogout,
  fetchPlayerSearch,
  fetchServerInfo,
  fetchServerInfoWithPort,
} from 'api/users'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import useDebounce from 'components/debounce/useDebounce'
import { fetchGetMe } from 'api/admins'

import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Dropdown,
  Popover,
  Whisper,
} from 'rsuite'
import { Link, NavLink, useLocation } from 'react-router-dom'

let links: any[] = []

function Header() {
  const roles = localStorage.getItem('roles')

  links = [
    ['панель', '/'],
    roles?.includes('Admin log access')
      ? ['админ лог', '/admins-log']
      : ['', ''],
    !roles?.includes('Base access') ? ['', ''] : ['баны', '/bans-log'],
    !roles?.includes('Base access') ? ['', ''] : ['чат', '/chat-log'],
    !roles?.includes('Base access') ? ['', ''] : ['игроки', '/players-list'],
    !roles?.includes('Base access') ? ['', ''] : ['админы', '/admins-list'],
    roles?.includes('Management') ? ['управление', '/admin-route'] : ['', ''],
  ]

  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const queryClient = useQueryClient()
  const [searchPlayer, setSearchPlayer] = useState('')
  const [foundPlayers, setFoundPlayers] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  const debouncedSearch = useDebounce(searchPlayer, 300)

  const { data: getMe } = useQuery(['get-me'], fetchGetMe)

  const searchPlayerMutation = useMutation(
    () => fetchPlayerSearch(searchPlayer.toString()),
    {
      // onSuccess: () => queryClient.invalidateQueries(['players']),
      onSuccess: (data) => setFoundPlayers(data),
    }
  )

  const logoutHandler = async () => {
    await fetchLogout()
    await localStorage.clear()
    await window.location.replace('/')
  }

  // const { data: serverOne } = useQuery(
  //   ['serverOne'],
  //   () => fetchServerInfoWithPort(8000),
  //   { refetchInterval: 5000 }
  // )

  // const { data: serverTwo } = useQuery(
  //   ['serverTwo'],
  //   () => fetchServerInfoWithPort(8001),
  //   { refetchInterval: 5000 }
  // )

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

  let server = localStorage.getItem('server')

  useEffect(() => {
    server = localStorage.getItem('server')
  }, [server])

  // const speakerOne = (
  //   <Popover title={serverOne?.serverName}>
  //     <div>
  //       <p>
  //         Игроков: {serverOne?.playerCount}/100{' '}
  //         {serverOne?.publicQueue === 0 ? `` : `(+ ${serverOne?.publicQueue})`}
  //       </p>
  //       <p>TPS: {serverOne?.serverTickRate}</p>
  //       <p>Текущая карта: {serverOne?.currentLayer}</p>
  //       <p>Следующая карта: {serverOne?.nextLayer}</p>
  //     </div>
  //   </Popover>
  // )

  console.log('Header.tsx включить спикер на второй сервер')

  // const speakerTwo = (
  //   <Popover title={serverTwo?.serverName}>
  //     <div>
  //       <p>
  //         Игроков: {serverTwo?.playerCount}/100{' '}
  //         {serverTwo?.publicQueue === 0 ? `` : `(+ ${serverTwo?.publicQueue})`}
  //       </p>
  //       <p>TPS: {serverTwo?.serverTickRate}</p>
  //       <p>Текущая карта: {serverTwo?.currentLayer}</p>
  //       <p>Следующая карта: {serverTwo?.nextLayer}</p>
  //     </div>
  //   </Popover>
  // )

  const location = useLocation()

  return (
    <div className={styles.wrapper}>
      <ButtonToolbar>
        <ButtonGroup>
          {/*<Whisper*/}
          {/*  placement="bottomStart"*/}
          {/*  trigger="hover"*/}
          {/*  controlId="whisper1"*/}
          {/*  speaker={speakerOne}*/}
          {/*>*/}
          <Button
            onClick={() => {
              localStorage.setItem('server', String(8000))
              window.location.reload()
            }}
            appearance={server === '8000' ? 'primary' : 'default'}
            color={'green'}
          >
            OC1
          </Button>
          {/*</Whisper>*/}
          {/*<Whisper*/}
          {/*  placement="bottomStart"*/}
          {/*  trigger="hover"*/}
          {/*  controlId="whisper1"*/}
          {/*  speaker={speakerTwo}*/}
          {/*>*/}
          <Button
            onClick={() => {
              localStorage.setItem('server', String(8001))
              window.location.reload()
            }}
            appearance={server === '8001' ? 'primary' : 'default'}
            color={'green'}
          >
            OC2
          </Button>
          {/*</Whisper>*/}
        </ButtonGroup>
      </ButtonToolbar>
      <div className={styles.search}>
        <input
          className={styles.input}
          type="search"
          value={searchPlayer}
          placeholder={'Поиск игрока'}
          onChange={handleSearch}
        />
        {searchPlayer && (
          <div className={styles.data}>
            {foundPlayers?.map((player: any, index: number) => (
              <Link
                to={`player/${player.steamId}`}
                state={{ background: location }}
                style={{
                  textDecoration: 'none',
                  backgroundColor: player.onControl ? '#fd4b4c' : '',
                }}
                key={index}
                className={styles.item}
                onClick={() => handleClick(player.steamId)}
              >
                <span>
                  {player.name} {player.steamId}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Dropdown title="Меню" placement="bottomEnd">
        <Dropdown.Item panel style={{ padding: 10, width: 200 }}>
          <p>Зашел как</p>
          <strong>{getMe?.name}</strong>
          {/*<strong>name</strong>*/}
        </Dropdown.Item>
        <Dropdown.Item divider />
        {links.map(([title, link], index) =>
          title ? (
            <NavLink key={index} to={link}>
              <Dropdown.Item>{title}</Dropdown.Item>
            </NavLink>
          ) : null
        )}
        <Dropdown.Item divider />
        <Dropdown.Item onClick={logoutHandler}>Выйти</Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export default Header
