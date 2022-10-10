import React, { useContext, useState } from 'react'
import styles from './Header.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchPlayerSearch } from 'api/users'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { LogoutBtn } from 'components/buttons'
import { Navbar } from 'components/navbar/Navbar'

function Header() {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const queryClient = useQueryClient()
  const [searchPlayer, setSearchPlayer] = useState('')
  const [foundPlayers, setFoundPlayers] = useState<{
    foundPlayers: any
  }>()

  const searchPlayerMutation = useMutation(
    () => fetchPlayerSearch(searchPlayer),
    {
      // onSuccess: () => queryClient.invalidateQueries(['players']),
      onSuccess: (data) => setFoundPlayers(data),
    }
  )

  const handleSearch = (e: any) => {
    setSearchPlayer(e.target.value.toLowerCase())
    searchPlayerMutation.mutate()
  }

  const handleClick = (steamId: string) => {
    setPlayerModal(steamId)
    setSearchPlayer('')
  }

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
            {foundPlayers?.foundPlayers.map((player: any, index: number) => (
              <div
                key={index}
                className={styles.item}
                onClick={() => handleClick(player.steamId)}
              >
                <span>{player.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.logout}>
        <LogoutBtn />
      </div>
    </div>
  )
}

export default Header
