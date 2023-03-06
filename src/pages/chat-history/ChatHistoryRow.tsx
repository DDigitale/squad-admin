import React, { useContext } from 'react'
import styles from './ChatHistoryRow.module.scss'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'

interface Props {
  item: any
}

function ChatHistoryRow({ item }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const time = new Date(Date.parse(item.createTime)).toLocaleString('ru')

  return (
    <div className={styles.row}>
      <span className={styles.time}>{time}</span>
      <span className={styles.chatType}>{item.chatType}</span>
      <span
        className={styles.name}
        onClick={() => setPlayerModal(item.playerSteamId)}
      >
        {item.playerName}
      </span>
      <span className={styles.reason}>{item.message}</span>
      <span className={styles.server}>{item.server.shortName}</span>
    </div>
  )
}

export default ChatHistoryRow
