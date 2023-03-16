import React, { useContext } from 'react'
import styles from './SuspectedPlayers.module.scss'
import { ViolationRow } from 'modules/suspected-players/components'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { Players } from 'types/players'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  players: Players[]
}

export function SuspectedPlayers({ players }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const playersWithViolations = players?.filter(
    (player) => player.violations.length > 0
  )

  const location = useLocation()

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.title}>Нарушители</span>
        {playersWithViolations?.map((player) => (
          <Link
            style={{ textDecoration: 'none' }}
            to={`player/${player.steamId}`}
            state={{ background: location }}
            key={player.id}
            onClick={() => setPlayerModal(player.steamId)}
            className={styles.list}
          >
            <span className={styles.name}>{player.name}</span>
            <ul>
              {player.violations.map((violation, index) => (
                <ViolationRow key={index} {...violation} />
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </>
  )
}
