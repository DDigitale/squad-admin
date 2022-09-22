import React, { useState } from 'react'
import { selectWarnPlayers } from 'store/slices/player-actions/warnSlice'
import { useDispatch, useSelector } from 'react-redux'
import { warnReasonText } from 'config/actions-text'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { warnPlayer } from '../../api/users'

interface Props {
  steamId: string
}

export function WarnForm({ steamId }: Props) {
  const queryClient = useQueryClient()
  const [warnReason, setWarnReason] = useState(warnReasonText[0].text)

  const options = warnReasonText.map((i) => {
    return (
      <option key={i.id} value={i.text}>
        {i.text}
      </option>
    )
  })

  const warnMutation = useMutation(() => warnPlayer(steamId, warnReason), {
    onSuccess: () => queryClient.invalidateQueries(['players']),
  })

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
      <button className="action-btn" onClick={() => warnMutation.mutate()}>
        ОТПРАВИТЬ СООБЩЕНИЕ
      </button>
    </div>
  )
}
