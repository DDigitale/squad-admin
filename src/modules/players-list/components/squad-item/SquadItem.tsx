import React from 'react'
// @ts-ignore
import styles from './SquadItem.module.scss'
import { VscLock, VscUnlock } from 'react-icons/vsc'
import { DisbandSquadBtn } from 'components/buttons/disband-squad/DisbandSquadBtn'
import { PlayerItem } from 'modules/players-list/components/player-item/PlayerItem'
import { Squad } from '../../../../types/player'

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
          <DisbandSquadBtn teamId={squad.teamId} squadId={squad.id} />
        </div>
        {squad.players.map((player) => (
          <PlayerItem key={player.id} player={player} />
        ))}
      </div>
    </>
  )
}
