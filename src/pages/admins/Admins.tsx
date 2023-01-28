import React from 'react'
import styles from './Admins.module.scss'
import { useQuery } from '@tanstack/react-query'
import { fetchAdmins } from 'api/users'
import AdminsTable from 'pages/admins/AdminsTable'

export function Admins() {
  const { data: admins, isSuccess, isError } = useQuery(['admins'], fetchAdmins)

  return (
    <div className={styles.wrapper}>
      <div className={styles.tableWrapper}>
        <AdminsTable admins={admins} />
      </div>
    </div>
  )
}
