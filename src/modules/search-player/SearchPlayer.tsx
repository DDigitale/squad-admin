import React, { useContext, useState } from 'react'
import styles from './SearchPlayer.module.scss'
import { useQuery } from '@tanstack/react-query'
import { fetchTeams } from 'api/users'
import { ModalContext, ModalContextType } from 'contexts'

export function SearchPlayer() {
  const [playerModal, setPlayerModal] = useContext(
    ModalContext
  ) as ModalContextType
  const [search, setSearch] = useState('')

  let { data: teams } = useQuery(['teams'], fetchTeams, {
    refetchInterval: 3000,
  })

  let players = teams
    ?.map((team) =>
      team.squads.map((squad) => squad.players.map((player) => player))
    )
    .flat(2)

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder="поиск игрока"
        onChange={handleSearch}
        value={search}
      />
      <>
        {search ? (
          players!
            .filter((player) => player.name.toLowerCase().includes(search))
            .map((player) => (
              <div
                key={player.name}
                className={styles.item}
                onClick={() => setPlayerModal(player)}
              >
                <p className={styles.name}>{player.name}</p>
              </div>
            ))
        ) : (
          <></>
        )}
      </>
    </div>
  )
}
