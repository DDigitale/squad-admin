import React from 'react'
import AdminListRow from 'pages/admin-route/AdminListRow'
import styles from 'pages/admin-route/AdminList.module.scss'

interface Props {
  adminsList: any
  roleGroups: any
}

function AdminList({ adminsList, roleGroups }: Props) {
  return (
    <div className={styles.wrapper}>
      {adminsList?.map((admin: any) => (
        <AdminListRow
          key={admin.steamId}
          roleGroups={roleGroups}
          admin={admin}
        />
      ))}
    </div>
  )
}

export default AdminList
