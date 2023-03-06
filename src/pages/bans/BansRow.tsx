import React, { useContext } from 'react'
import styles from './BansRow.module.scss'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'

interface Props {
  ban: any
}

function BansRow({ ban }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const banExpired = ban.expirationTime < new Date() || ban.isUnbannedManual

  return (
    <div className={styles.row}>
      <span className={styles.time}>{ban.creationTime.toLocaleString()}</span>
      <span
        className={styles.name}
        onClick={() => setPlayerModal(ban.bannedPlayer?.steamId)}
      >
        {ban.bannedPlayer.playerName}
      </span>
      <span className={styles.reason}>
        {ban.reason.slice(0, -4)}{' '}
        {ban.manualUnbannedTime && (
          <strong style={{ color: 'greenyellow' }}>
            Разбанил {ban.unbannedManualBy.adminName}{' '}
            {ban.manualUnbannedTime.toLocaleString()}
          </strong>
        )}
      </span>
      <span className={styles.admin} title={ban.bannedBy.adminName}>
        {ban.bannedBy.adminName}
      </span>
    </div>
  )
}

export default BansRow
