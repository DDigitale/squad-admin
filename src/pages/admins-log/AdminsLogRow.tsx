import React, { useContext } from 'react'
import styles from './AdminsLogRow.module.scss'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { actionsLocalizer } from 'utils/actionsLocalizer'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  admin: any
}

export function AdminsLogRow({ admin }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const time = new Date(Date.parse(admin.createTime)).toLocaleString('ru')

  const location = useLocation()

  return (
    <div className={styles.row}>
      <span className={styles.time}>{time}</span>
      <span style={{ whiteSpace: 'nowrap' }} className={styles.admin}>
        {admin.adminName}
      </span>
      <span className={styles.action}>{actionsLocalizer(admin.action)}</span>
      <Link
        style={{ textDecoration: 'none' }}
        to={`/player/${admin.playerByAdminId?.steamId}`}
        state={{ background: location }}
        className={styles.name}
        onClick={() => setPlayerModal(admin.playerByAdminId?.steamId)}
      >
        {admin.playerByAdminId?.name}
      </Link>
      <span className={styles.reason}>{admin.reason}</span>
      <span className={styles.server}>
        {admin.server.shortName === 'Unknown' ? '' : admin.server.shortName}
      </span>
    </div>
  )
}
