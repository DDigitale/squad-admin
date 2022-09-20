import React from 'react'
import { useDispatch } from 'react-redux'
import {showModal} from "store/features/modal/modalSlice";

export function PlayerItem({ player }) {
  const dispatch = useDispatch()

  return <>
        <div className="player-item" onClick={() => dispatch(showModal({ player }))}>
          <img className="class-icon" src={require(`assets/img/kits/${
              player.role.split(new RegExp('_'))[1]
            }.svg`)}
          />
          <span className="player-name">{player.name}</span>
        </div>
    </>
}
