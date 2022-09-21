import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectKickPlayers } from 'store'
import { removePlayerFromSquadRequest } from 'store'

export function RemovePlayerFromSquadForm({ steamId }) {
  const dispatch = useDispatch()
  const { isLoading, isSuccess, isError } = useSelector(selectKickPlayers)

  const removePlayerFromSquadHandler = () => {
    dispatch(removePlayerFromSquadRequest(steamId))
  }

  return (
    <div>
      <p>Исключить из отряда игрока {name}?</p>
      <button className="action-btn" onClick={removePlayerFromSquadHandler}>
        ИСКЛЮЧИТЬ
      </button>
    </div>
  )
}
