import React from 'react'
import styles from 'components/modal/components/punishments/Punishments.module.scss'
import { BanRow } from './BanRow'
import { useQuery } from '@tanstack/react-query'
import { fetchPlayerPunishmentHistory } from 'api/users'
import { Ban } from 'types/players'
import { KickRow } from 'components/modal/components/punishments/KickRow'
import { Spinner } from 'components/spinner/Spinner'

interface Props {
  playerSteamId: string
}

export function Punishments({ playerSteamId }: Props) {
  const {
    data: punishments,
    isSuccess,
    isLoading,
  } = useQuery(['players', playerSteamId, 'punishment'], () =>
    fetchPlayerPunishmentHistory(playerSteamId)
  )

  return (
    <div className={styles.wrapper}>
      {isLoading && <Spinner />}
      {isSuccess && (
        <>
          {punishments.bans?.map((ban: Ban) => (
            <BanRow key={ban.id} ban={ban} />
          ))}
          {punishments.kicks?.map((kick: any) => (
            <KickRow key={kick.id} kick={kick} />
          ))}
        </>
      )}
    </div>
  )
}
