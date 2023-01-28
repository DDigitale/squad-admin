import React from 'react'
import AdminsRow from 'pages/admins/AdminsRow'
import styles from 'pages/admins/AdminsTable.module.scss'

interface Props {
  admins: any
}

function AdminsTable({ admins }: Props) {
  return (
    <div className={styles.wrapper}>
      {admins?.map((admin: any) => (
        <AdminsRow key={admin.steamId} admin={admin} />
      ))}
    </div>
  )
}

export default AdminsTable
