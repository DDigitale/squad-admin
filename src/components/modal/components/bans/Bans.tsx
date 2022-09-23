import React from 'react'
import styles from './Bans.module.scss'
import { BanRow } from './BanRow'
import { useQuery } from '@tanstack/react-query'
import { fetchPlayerBans } from 'api/users'

interface Props {
  playerSteamId: string
}

export function Bans({ playerSteamId  }:Props) {
  const { data: bans, isSuccess } = useQuery(
    ['players', playerSteamId, 'bans'],
    () => fetchPlayerBans(playerSteamId)
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
