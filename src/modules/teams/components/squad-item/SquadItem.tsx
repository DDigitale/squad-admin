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

  const colorizeCmdSquad = () => {
    if (squad.name === 'CMD Squad') return 'rgba(255,217,63,0.52)'
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <button
            className={styles.id}
            onClick={() => setPlayerModal(squad.creatorSteam64id)}
            style={{
              backgroundColor: colorizeCmdSquad(),
            }}
          >
            {squad.id}
          </button>
          <span
            className={styles.name}
            style={{
              color: colorizeCmdSquad(),
            }}
          >
            {squad.name}
          </span>
          <div
            className={styles.size}
            style={{
              color: colorizeCmdSquad(),
            }}
          >
            {squad.size}/9
          </div>
          <div
            className={styles.lock}
            style={{
              color: squad.isLocked ? 'rgba(255,114,114,0.7)' : '',
            }}
          >
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
