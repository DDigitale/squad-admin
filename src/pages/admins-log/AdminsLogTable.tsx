import React from 'react'
import styles from './AdminsLogTable.module.scss'
import { AdminsLogRow } from 'pages/admins-log/AdminsLogRow'

interface Props {
  content: any
}

export function AdminsLogTable({ content: admins }: Props) {
  return (
    <div className={styles.wrapper}>
      {admins.map((admin: any) => (
        <AdminsLogRow key={admin.id} admin={admin} />
      ))}
    </div>
  )
}
