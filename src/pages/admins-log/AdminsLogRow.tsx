import React, { useContext } from 'react'
import styles from './AdminsLogRow.module.scss'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { FaSteam } from 'react-icons/fa'

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
      <span>{admin.id}</span>
      <span>{time}</span>
      <span>{admin.adminsByAdminId}</span>
      <span>{admin.action}</span>
      <span
        className={styles.name}
        onClick={() => setPlayerModal(admin.playerByAdminId?.steamId)}
      >
        {admin.playerByAdminId?.name}
      </span>
      <span>
        <a
          className={styles.link}
          href={`http://steamcommunity.com/profiles/${admin.playerByAdminId?.steamId}`}
          target="_blank"
        >
          <FaSteam />
        </a>
      </span>
      <span>{admin.reason}</span>
      {/*<span>{admin.}</span>*/}
      {/*<span>{admin.}</span>*/}
    </div>
  )
}
