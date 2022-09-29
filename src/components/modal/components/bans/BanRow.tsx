import React from 'react'
import styles from './BansRow.module.scss'
import { Ban } from 'types/players'

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
  },
}: Props) {
  return (
    <div className={styles.row}>
      <div className={styles.up}>
        <span className={styles.adminName}>VoblaCringitale</span>
        {unbannedTime ? (
          <span className={styles.unbannedTime}>
            Разбанен {unbannedTime.toLocaleString()}
          </span>
        ) : (
          <span className={styles.expirationTime}>
            До {expirationTime.toLocaleString()}
          </span>
        )}
      </div>
      <div className={styles.down}>
        <span className={styles.creationTime}>
          {creationTime.toLocaleString('ru-RU')}
        </span>
        <span className={styles.reason}>{reason}</span>
      </div>
    </div>
  )
}
