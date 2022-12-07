import React, { useContext } from 'react'
import styles from './AdminsLogRow.module.scss'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'

interface Props {
  admin: any
}

export function AdminsLogRow({ admin }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const time = new Date(Date.parse(admin.createTime)).toLocaleString('ru')

  return (
    <div className={styles.row}>
      <span className={styles.time}>{time}</span>
      <span style={{ whiteSpace: 'nowrap' }}>{admin.adminName}</span>
      <span className={styles.action}>{admin.action}</span>
      <span
        className={styles.name}
        onClick={() => setPlayerModal(admin.playerByAdminId?.steamId)}
      >
        {admin.playerByAdminId?.name}
      </span>
      <span className={styles.reason}>{admin.reason}</span>
    </div>
  )
}
