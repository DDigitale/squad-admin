import React, { useContext } from 'react'
import styles from './SuspectedPlayers.module.scss'
import { ViolationRow } from 'modules/suspected-players/components'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { Players } from 'types/players'

interface Props {
  players: Players[]
}

export function SuspectedPlayers({ players }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const playersWithViolations = players.filter(
    (player) => player.violations.length > 0
  )

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.title}>Нарушители</span>
        {playersWithViolations.map((player) => (
          <div
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
          </div>
        ))}
      </div>
    </>
  )
}
