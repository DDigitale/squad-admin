import React, { useContext } from 'react'
import styles from './BansRow.module.scss'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { formatDistanceStrict } from 'date-fns'
import { ru } from 'date-fns/locale'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  ban: any
}

function BansRow({ ban }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const banExpired = ban.expirationTime < new Date() || ban.isUnbannedManual

  const result = formatDistanceStrict(
    new Date(ban.creationTime),
    new Date(ban.expirationTime),
    {
      locale: ru,
      unit: 'day',
    }
  )

  const location = useLocation()

  return (
    <div className={styles.row}>
      <span className={styles.time}>{ban.creationTime.toLocaleString()}</span>
      <Link
        style={{ textDecoration: 'none' }}
        to={`/player/${ban.bannedPlayer?.steamId}`}
        state={{ background: location }}
        className={styles.name}
        onClick={() => setPlayerModal(ban.bannedPlayer?.steamId)}
      >
        {ban.bannedPlayer.playerName}
      </Link>
      <span className={styles.reason}>
        {ban.reason.slice(0, -4)} (на {result}){' '}
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
