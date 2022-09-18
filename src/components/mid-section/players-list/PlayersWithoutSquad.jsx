import React from 'react'
import { showModal } from '../../../store/features/modal/modalSlice'
import { useDispatch } from 'react-redux'

export function PlayersWithoutSquad(props) {
  const dispatch = useDispatch()
  const { pws: player } = props

  return (
    <>
      <div className="pws-wrapper">
        <div
          key={player.id}
          className="pws-item"
          onClick={() => dispatch(showModal({ player }))}
        >
          <img
            className="class-icon"
            src={require(`../../../assets/img/kits/${
              player.role.split(new RegExp('_'))[1]
            }.svg`)}
          />
          <p className="pws-name">{player.name}</p>
        </div>
      </div>
    </>
  )
}
