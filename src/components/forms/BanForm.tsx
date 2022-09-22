import React, { useState } from 'react'
import { banLengthText, banReasonText } from 'config/actions-text'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { banPlayer } from '../../api/users'

interface Props {
  steamId: string
}

export function BanForm({ steamId }: Props) {
  const queryClient = useQueryClient()
  const [banReason, setBanReason] = useState(banReasonText[0].text)
  const [banLength, setBanLength] = useState(banLengthText[0].blength)

  const reasonOptions = banReasonText.map((i) => {
    return (
      <option className="select-options-active" key={i.id} value={i.text}>
        {i.text}
      </option>
    )
  })

  const lengthOptions = banLengthText.map((i) => {
    return (
      <option className="select-options-active" key={i.id} value={i.blength}>
        {i.blength}
      </option>
    )
  })

  const banPlayerMutation = useMutation(
    () => banPlayer(steamId, banLength, banReason),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  return (
    <div>
      <div>
        <p>Причина бана:</p>
        <select
          className="select-options"
          value={banReason}
          onChange={(e) => setBanReason(e.target.value)}
        >
          {reasonOptions}
        </select>
        <p>Срок бана:</p>
        <select
          className="select-options"
          value={banLength}
          onChange={(e) => setBanLength(e.target.value)}
        >
          {lengthOptions}
        </select>
      </div>
      <button className="action-btn" onClick={() => banPlayerMutation.mutate()}>
        ЗАБАНИТЬ
      </button>
    </div>
  )
}
