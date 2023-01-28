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
    admin,
    id,
  },
}: Props) {
  const queryClient = useQueryClient()
  const unbanPlayerMutation = useMutation(() => unbanPlayer(id), {
    onSuccess: () => queryClient.invalidateQueries(),
  })

  const banExpired = expirationTime < new Date() || isUnbannedManually

  return (
    <div className={styles.row}>
      <span className={styles.creationTime}>
        {creationTime.toLocaleString('ru-RU')}
      </span>
      <span className={styles.adminName}>{admin.name}</span>
      {unbannedTime ? (
        <span className={styles.unbannedTime}>
          {unbannedTime.toLocaleString()}
        </span>
      ) : (
        <span className={styles.expirationTime}>
          {banExpired
            ? `${unbannedTime === null ? 'Перманентный бан' : 'Бан истёк'}`
            : `${expirationTime.toLocaleString()}`}
        </span>
      )}
      <span className={styles.reason}>Бан: {reason.split('До 20')[0]}</span>
      {!banExpired && (
        <button
          className={styles.unbanBtn}
          onClick={() => unbanPlayerMutation.mutate()}
        >
          Разбанить
        </button>
      )}
      {expirationTime === null && unbannedTime === null && (
        <button
          className={styles.unbanBtn}
          onClick={() => unbanPlayerMutation.mutate()}
        >
          Разбанить
        </button>
      )}
    </div>
  )
}
