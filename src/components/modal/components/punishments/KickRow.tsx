import React from 'react'
import styles from './BansRow.module.scss'

interface Props {
  kick: any
}

export function KickRow({
  kick: { creationTime, expirationTime, unbannedTime, reason, adminsBySteamId },
}: Props) {
  return (
    <div className={styles.row}>
      <div className={styles.up}>
        <div>
          <span className={styles.creationTime}>
            {creationTime.toLocaleString()}
          </span>
          <span className={styles.adminName}>{adminsBySteamId.name}</span>
        </div>
      </div>

      <span className={styles.reason}>{reason}</span>
    </div>
  )
}
