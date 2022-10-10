import React, { useContext } from 'react'
import styles from './SquadItem.module.scss'
import { VscLock, VscUnlock } from 'react-icons/vsc'
import { Squad } from 'types/players'
import { PlayerItem } from '../player-item'
import { DisbandSquadBtn } from '../disband-squad-btn'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'

interface Props {
  squad: Squad
}

export function SquadItem({ squad }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <button
            className={styles.id}
            onClick={() => setPlayerModal(squad.creatorSteam64id)}
          >
            {squad.id}
          </button>
          <span className={styles.name}>{squad.name}</span>
          <div className={styles.size}>{squad.size}/9</div>
          <div className={styles.lock}>
            {squad.isLocked ? <VscLock /> : <VscUnlock />}
          </div>
          <DisbandSquadBtn
            teamId={squad.teamId}
            squadId={squad.id}
            squadName={squad.name}
          />
        </div>
        {squad.players.map((player) => (
          <PlayerItem key={player.id} player={player} />
        ))}
      </div>
    </>
  )
}
