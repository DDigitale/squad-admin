import React, { useState } from 'react'
import {
  selectWarnPlayers,
  warnPlayerRequest,
} from 'store/slices/player-actions/warnSlice'
import { useDispatch, useSelector } from 'react-redux'
import { warnReasonText } from 'config/actions-text'

export function WarnForm({ steamId }) {
  const dispatch = useDispatch()
  const { isLoading, isSuccess, isError } = useSelector(selectWarnPlayers)
  const [warnReason, setWarnReason] = useState(warnReasonText[0].text)

  const options = warnReasonText.map((i) => {
    return (
      <option key={i.id} value={i.text}>
        {i.text}
      </option>
    )
  })

  const warnPlayerHandler = () => {
    dispatch(warnPlayerRequest({ warnReason, playerSteamId: steamId }))
  }

  return (
    <div>
      <div>
        <p>
          Выберите сообщение: <span>(можно вписать)</span>
        </p>
        <select
          className="select-options"
          value={warnReason}
          onChange={(e) => setWarnReason(e.target.value)}
        >
          {options}
        </select>
        <p>Введите сообщение:</p>
        <input
          className="select-options"
          type="text"
          value={warnReason}
          onChange={(e) => setWarnReason(e.target.value)}
        />
      </div>
      <button className="action-btn" onClick={warnPlayerHandler}>
        ОТПРАВИТЬ СООБЩЕНИЕ
      </button>
    </div>
  )
}
