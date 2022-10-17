import React, { useEffect, useState } from 'react'
import styles from './BansRow.module.scss'
import { Ban } from 'types/players'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { unbanPlayer } from 'api/users'

interface Props {
  ban: Ban
}

export function BanRow({
  ban: {
    creationTime,
    expirationTime,
    unbannedTime,
    isUnbannedManually,
    reason,
    adminsBySteamId,
    id,
  },
}: Props) {
  const queryClient = useQueryClient()
  const unbanPlayerMutation = useMutation(() => unbanPlayer(id), {
    onSuccess: () => queryClient.invalidateQueries(['players']),
  })

  const banExpired = expirationTime < new Date() || isUnbannedManually

  return (
    <div className={styles.row}>
      <div className={styles.up}>
        <div>
          <span className={styles.creationTime}>
            {creationTime.toLocaleString('ru-RU')}
          </span>
          <span className={styles.adminName}>{adminsBySteamId.name}</span>
        </div>
        {unbannedTime ? (
          <span className={styles.unbannedTime}>
            Разбанен {unbannedTime.toLocaleString()}
          </span>
        ) : (
          <span className={styles.expirationTime}>
            {banExpired ? `Бан истёк` : `До ${expirationTime.toLocaleString()}`}
          </span>
        )}
      </div>
      <div className={styles.down}>
        <span className={styles.reason}>Бан: {reason.split('.')[0]}</span>
        {!banExpired && (
          <button
            className={styles.unbanBtn}
            onClick={() => unbanPlayerMutation.mutate()}
          >
            Разбанить
          </button>
        )}
      </div>
    </div>
  )
}
