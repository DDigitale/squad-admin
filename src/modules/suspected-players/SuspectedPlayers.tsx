import React, { useContext } from 'react'
import styles from './SuspectedPlayers.module.scss'
import { showModal } from 'store/slices/modal/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectPlayers } from 'store/slices/get-players/getOnlineSlice'
import { flatTeams } from 'utils/extendPlayers'
import { ViolationRow } from 'modules/suspected-players/components/ViolationRow'
import { ModalContext, ModalContextType } from '../../contexts'
import { Player } from '../../types/player'

interface Props {
  players: Player[]
}

export function SuspectedPlayers({ players }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    ModalContext
  ) as ModalContextType

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
            onClick={() => setPlayerModal(player)}
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
