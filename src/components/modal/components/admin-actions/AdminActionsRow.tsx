import React from 'react'
import styles from './AdminActionsRow.module.scss'
import { actionsLocalizer } from 'utils/actionsLocalizer'

interface Props {
  action: any
}

function AdminActionsRow({ action }: Props) {
  return (
    <div className={styles.row}>
      <span className={styles.time}>{action.createTime.toLocaleString()}</span>
      <span style={{ whiteSpace: 'nowrap' }} className={styles.name}>
        {action.adminName}
      </span>
      <span className={styles.type} style={{ whiteSpace: 'nowrap' }}>
        {actionsLocalizer(action.action)}
      </span>
      <span className={styles.message}>{action.reason}</span>
      <span className={styles.server}>{action.server.shortName}</span>
    </div>
  )
}

export default AdminActionsRow
