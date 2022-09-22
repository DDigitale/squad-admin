import React from 'react'
import styles from './BansRow.module.scss'

export function BanRow({ ban }) {
  return (
    <div className={styles.row}>
      <span className={styles.reason}>{ban.reason}</span>
      <span className={styles.isUnbannedManually}>
        {ban.isUnbannedManually}
      </span>
      <span className={styles.unbannedTime}>{ban.unbannedTime}</span>
      <span className={styles.creationTime}>{ban.creationTime}</span>
      <span className={styles.expirationTime}>{ban.expirationTime}</span>
    </div>
  )
}
