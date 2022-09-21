import React from 'react'
import styles from './DisbandSquadBtn.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { disbandSquadRequest, selectDisbandSquad } from 'store'
import { IoCloseCircleOutline } from 'react-icons/io5'

export function DisbandSquadBtn({ teamId, squadId }) {
  const dispatch = useDispatch()
  const { isLoading, isSuccess, isError } = useSelector(selectDisbandSquad)

  const disbandSquadHandler = () => {
    dispatch(disbandSquadRequest(teamId, squadId))
  }

  return (
    <>
      <IoCloseCircleOutline
        onClick={disbandSquadHandler}
        className={styles.disband}
      />
    </>
  )
}
