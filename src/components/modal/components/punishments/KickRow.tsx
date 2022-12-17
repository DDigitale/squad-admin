import React from 'react'
import styles from './BansRow.module.scss'

interface Props {
  kick: any
}

export function KickRow({
  kick: { creationTime, expirationTime, unbannedTime, reason, admin },
}: Props) {
  return (
    <div className={styles.row}>
      <div className={styles.up}>
        <div>
          <span className={styles.creationTime}>
            {creationTime.toLocaleString()}
          </span>
          <span className={styles.adminName}>{admin.name}</span>
        </div>
      </div>

      <span className={styles.reason}>Кик: {reason}</span>
    </div>
  )
}
