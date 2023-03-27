import React from 'react'
import AdminsRow from 'pages/admins/AdminsRow'
import styles from 'pages/admins/AdminsTable.module.scss'

interface Props {
  admins: any
}

function AdminsTable({ admins }: Props) {
  const sortAdmins = (a: any, b: any) => {
    if (a.BanPlayer > b.BanPlayer) {
      return -1
    } else {
      return 1
    }
  }

  return (
    <div className={styles.wrapper}>
      {admins?.sort(sortAdmins).map((admin: any) => (
        <AdminsRow key={admin.steamId} admin={admin} />
      ))}
    </div>
  )
}

export default AdminsTable
