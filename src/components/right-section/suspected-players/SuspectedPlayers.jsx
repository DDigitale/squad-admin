import React, { useEffect } from 'react'
import { showModal } from '../../../store/features/modal/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectPlayers } from '../../../store/features/get-players/getPlayersSlice'
import { flatData } from '../../../store/features/get-players/extendPlayers'
import { ViolationRow } from './violation-row/ViolationRow'

export function SuspectedPlayers() {
  const dispatch = useDispatch()
  let data = useSelector((state) => selectPlayers(state))

  const players = data
    ? flatData(data).filter((player) => player.violations.length > 0)
    : []

  const rowClickHandler = (player) => {
    dispatch(showModal({ player }))
  }

  return (
    <>
      <div className="suspect-players">
        <h2 className="suspect-players-title">Нарушители</h2>
        {players.map((player) => (
          <div
            key={player.id}
            onClick={() => rowClickHandler(player)}
            className="suspect-players-list"
          >
            <h3>{player.name}</h3>
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
