import React, { useContext } from 'react'
import styles from './ChatHistoryRow.module.scss'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  item: any
}

function ChatHistoryRow({ item }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const time = new Date(Date.parse(item.createTime)).toLocaleString('ru')

  const location = useLocation()

  return (
    <div className={styles.row}>
      <span className={styles.time}>{time}</span>
      <span className={styles.chatType}>{item.chatType}</span>
      <Link
        style={{ textDecoration: 'none' }}
        to={`/player/${item.playerSteamId}`}
        state={{ background: location }}
        className={styles.name}
        onClick={() => setPlayerModal(item.playerSteamId)}
      >
        {item.playerName}
      </Link>
      <span className={styles.reason}>{item.message}</span>
      <span className={styles.server}>{item.server.shortName}</span>
    </div>
  )
}

export default ChatHistoryRow
