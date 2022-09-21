import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  kickPlayerRequest,
  selectKickPlayers,
} from 'store/slices/player-actions/kickSlice'
import { kickReasonText } from 'config/actions-text'
import { teamChangePlayerRequest } from 'store/slices/player-actions/teamChangeSlice'

export function TeamChangeForm({ steamId }) {
  const dispatch = useDispatch()
  const { isLoading, isSuccess, isError } = useSelector(selectKickPlayers)

  const teamChangePlayerHandler = () => {
    dispatch(teamChangePlayerRequest(steamId))
  }

  return (
    <div>
      <p>Сменить команду игроку {name}?</p>
      <button className="action-btn" onClick={teamChangePlayerHandler}>
        СМЕНИТЬ
      </button>
    </div>
  )
}
