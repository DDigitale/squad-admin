import React from 'react'
import styles from './SquadItem.module.scss'
import { VscLock, VscUnlock } from 'react-icons/vsc'
import { Squad } from 'types/players'
import { PlayerItem } from '../player-item'
import { DisbandSquadBtn } from '../disband-squad-btn'

interface Props {
  squad: Squad
}

export function SquadItem({ squad }: Props) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <span className={styles.id}>{squad.id}</span>
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
