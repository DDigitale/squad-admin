import React from 'react'
import styles from './KickRow.module.scss'

interface Props {
  kick: any
}

export function KickRow({
  kick: { creationTime, expirationTime, unbannedTime, reason, admin },
}: Props) {
  return (
    <div className={styles.row}>
      <span className={styles.creationTime}>
        {creationTime.toLocaleString()}
      </span>
      <span className={styles.adminName}>{admin.name}</span>
      <span className={styles.reason}>Кик: {reason}</span>
    </div>
  )
}
