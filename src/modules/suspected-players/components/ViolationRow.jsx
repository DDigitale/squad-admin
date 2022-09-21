import React from 'react'
import styles from './ViolationRow.module.scss'

export function ViolationRow({ ...violation }) {
  return <li className={styles.row}>{violation.payload.message}</li>
}
