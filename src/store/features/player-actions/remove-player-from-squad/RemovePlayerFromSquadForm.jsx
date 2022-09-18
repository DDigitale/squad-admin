import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectKickPlayers } from '../kick/kickSlice'
import { removePlayerFromSquadRequest } from './removePlayerFromSquadSlice'

export function RemovePlayerFromSquadForm(props) {
  const { steam64id, name } = props
  const dispatch = useDispatch()
  const { isLoading, isSuccess, isError } = useSelector(selectKickPlayers)

  const removePlayerFromSquadHandler = () => {
    dispatch(removePlayerFromSquadRequest(steam64id))
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
