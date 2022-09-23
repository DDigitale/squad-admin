import React from 'react'
import styles from './BansRow.module.scss'
import { Ban } from '../../../../types/player'

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
  console.log(unbannedTime)

  return (
    <div className={styles.row}>
      <div className={styles.up}>
        <span className={styles.adminName}>VoblaCringitale</span>
        <span className={styles.creationTime}>
          {creationTime.toLocaleString()}
        </span>
      </div>
      <div className={styles.down}>
        <span className={styles.reason}>{reason}</span>
        <span className={styles.expirationTime}>
          До: {expirationTime.toLocaleString()}
        </span>
        {unbannedTime && (
          <span className={styles.unbannedTime}>
            Разбанен вручную: {unbannedTime.toLocaleString()}
          </span>
        )}
      </div>
    </div>
  )
}
