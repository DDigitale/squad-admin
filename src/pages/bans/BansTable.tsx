import React from 'react'
import BansRow from 'pages/bans/BansRow'
import styles from 'pages/admins-log/AdminsLogTable.module.scss'

interface Props {
  content: any
}

function BansTable({ content: bans }: Props) {
  return (
    <div className={styles.wrapper}>
      {bans.map((ban: any) => (
        <BansRow key={ban.id} ban={ban} />
      ))}
    </div>
  )
}

export default BansTable
