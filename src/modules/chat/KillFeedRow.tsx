import React, { forwardRef, useContext } from 'react'
import styles from './KillFeedRow.module.scss'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { Link, useLocation } from 'react-router-dom'
import { dateTimeFormat } from 'utils/dateFormatter'

interface Props {
  data: any
}

export const KillFeedRow = forwardRef<HTMLDivElement, Props>(function ChatRow(
  { data },
  ref
) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const location = useLocation()

  return (
    <div
      className={styles.row}
      ref={ref}
      style={{
        backgroundColor: data.tk === 'true' ? 'rgba(255,0,0,0.23)' : '',
      }}
    >
      <div className={styles.top}>
        <span className={styles.time}>
          {dateTimeFormat(data.time).slice(10)}
        </span>
        <span className={styles.weapon}>
          {data.weapon.replace('BP', '').replaceAll('_', ' ')}
        </span>
      </div>
      <div className={styles.bottom}>
        <Link
          style={{ textDecoration: 'none' }}
          className={styles.name}
          onClick={() => setPlayerModal(data.attacker)}
          to={`player/${data.attacker}`}
          state={{ background: location }}
        >
          {data.attackerName}
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          className={styles.name}
          onClick={() => setPlayerModal(data.victim)}
          to={`player/${data.victim}`}
          state={{ background: location }}
        >
          {data.victimName}
        </Link>
      </div>
    </div>
  )
})
