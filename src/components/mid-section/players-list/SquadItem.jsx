import React from 'react'
import { VscLock, VscUnlock } from 'react-icons/vsc'
import { DisbandSquadBtn } from '../../../store/features/squad-actions/disband/DisbandSquadBtn'
import { PlayerItem } from './PlayerItem'
import { useDispatch } from 'react-redux'

export function SquadItem({squad}) {
  const dispatch = useDispatch()

  return (
    <>
      <div className="squad-item">
        <div className="squad-title">
          <span className="squad-id">
            {squad.id}
          </span>
          <span className="squad-name">
            {squad.name}
          </span>
          <div className="squad-size">
            {squad.size}/9
          </div>
          <div className="squad-locked-status">
            {squad.isLocked ? <VscLock /> : <VscUnlock />}
          </div>
          <DisbandSquadBtn squadId={squad.id} teamId={squad.teamId}/>
        </div>
        {squad.players.map((player) => (
          <PlayerItem key={player.id} player={player} squad={squad} />
        ))}
      </div>
    </>
  )
}
