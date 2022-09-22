import React, { useState } from 'react'
import { kickReasonText } from 'config/actions-text'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { kickPlayer, teamChangePlayer } from '../../api/users'

interface Props {
  steamId: string
}

export function KickForm({ steamId }: Props) {
  const queryClient = useQueryClient()
  const [kickReason, setKickReason] = useState(kickReasonText[0].text)

  const options = kickReasonText.map((i) => {
    return (
      <option className="select-options-active" key={i.id} value={i.text}>
        {i.text}
      </option>
    )
  })

  const kickPlayerMutation = useMutation(
    () => kickPlayer(steamId, kickReason),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

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
      <button
        className="action-btn"
        onClick={() => kickPlayerMutation.mutate()}
      >
        КИКНУТЬ
      </button>
    </div>
  )
}
