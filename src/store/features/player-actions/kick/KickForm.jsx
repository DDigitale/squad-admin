import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { kickReasonText } from '../../../../config/actions-text'
import { kickPlayerRequest, selectKickPlayers } from './kickSlice'

export function KickForm(props) {
  const { steam64id, toggleState } = props
  const dispatch = useDispatch()
  const { isLoading, isSuccess, isError } = useSelector(selectKickPlayers)
  const [kickReason, setKickReason] = useState(kickReasonText[0].text)

  const options = kickReasonText.map((i) => {
    return (
      <option className="select-options-active" key={i.id} value={i.text}>
        {i.text}
      </option>
    )
  })

  const kickPlayerHandler = () => {
    dispatch(kickPlayerRequest({ kickReason, id: steam64id }))
  }

  return (
    <div>
      <div>
        <p>Причина кика:</p>
        <select
          className="select-options"
          value={kickReason}
          onChange={(e) => setKickReason(e.target.value)}
        >
          {options}
        </select>
      </div>
      <button className="action-btn" onClick={kickPlayerHandler}>
        КИКНУТЬ
      </button>
    </div>
  )
}
