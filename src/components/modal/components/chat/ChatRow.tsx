import React from 'react'
import styles from './ChatRow.module.scss'
import { Message } from 'types/players'

interface Props {
  message: Message
}

export function ChatRow({ message }: Props) {
  const rowColor = () => {
    if (message.chatType === 'ChatAll') return '#4ba8fe'
    if (message.chatType === 'ChatTeam') return '#4ba8fe'
    if (message.chatType === 'ChatSquad') return '#33fd55'
    if (message.chatType === 'ChatAdmin') return '#33fdd9'
  }

  return (
    <div className={styles.row} style={{ color: `${rowColor()}` }}>
      <span className={styles.time}>{message.createTime.toLocaleString()}</span>
      <span className={styles.type}>{message.chatType}</span>
      <span className={styles.message}>{message.message}</span>
    </div>
  )
}
