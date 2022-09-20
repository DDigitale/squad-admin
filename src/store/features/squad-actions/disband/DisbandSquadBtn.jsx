import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { disbandSquadRequest, selectDisbandSquad } from './disbandSlice'
import { IoCloseCircleOutline } from "react-icons/io5";


export function DisbandSquadBtn(props) {
  const { teamId, squadId } = props
  const dispatch = useDispatch()
  const { isLoading, isSuccess, isError } = useSelector(selectDisbandSquad)

  const disbandSquadHandler = () => {
    dispatch(disbandSquadRequest(teamId, squadId))
  }

  return (
    <>
      <IoCloseCircleOutline onClick={disbandSquadHandler} className="disband-btn">
        ds
      </IoCloseCircleOutline>
    </>
  )
}
