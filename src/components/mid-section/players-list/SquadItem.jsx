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
          <div className="squad-id">
            <p>{squad.id}</p>
          </div>
          <div className="squad-name">
            <div>{squad.name}</div>
          </div>
          <div className="squad-size">
            <div>{squad.size}/9</div>
            <div className="squad-locked-status">
              {squad.isLocked ? <VscLock /> : <VscUnlock />}
            </div>
          </div>

          {/*<DisbandSquadBtn squadId={squad.id} teamId={team.id}/>*/}
        </div>
        {squad.players.map((player) => (
          <PlayerItem key={player.id} player={player} squad={squad} />
        ))}
      </div>
    </>
  )
}
