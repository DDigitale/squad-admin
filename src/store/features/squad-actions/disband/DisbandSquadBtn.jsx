import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { disbandSquadRequest, selectDisbandSquad } from './disbandSlice'

export function DisbandSquadBtn(props) {
  const { teamId, squadId } = props
  const dispatch = useDispatch()
  const { isLoading, isSuccess, isError } = useSelector(selectDisbandSquad)

  const disbandSquadHandler = () => {
    dispatch(disbandSquadRequest(teamId, squadId))
  }

  return (
    <>
      <button onClick={disbandSquadHandler} className="fast-action-btn">
        ds
      </button>
    </>
  )
}
