import React from 'react'
import styles from './Bans.module.scss'
import { BanRow } from './BanRow'
import { useQuery } from '@tanstack/react-query'
import { fetchPlayerBans } from 'api/users'

export function Bans({ player }) {
  const {
    data: bans,
    isSuccess,
    isError,
    isLoading,
  } = useQuery(['players', player.steamId, 'bans'], () =>
    fetchPlayerBans(player.steamId)
  )

  return (
    <div className={styles.wrapper}>
      {isSuccess && (
        <>
          {bans.map((ban) => (
            <BanRow key={ban.id} ban={ban} />
          ))}
        </>
      )}
    </div>
  )
}
