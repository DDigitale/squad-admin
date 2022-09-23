import React from 'react'
import styles from './ChatRow.module.scss'
import { Message } from '../../../../types/player'

interface Props {
  message: Message
}

export function ChatRow({ message }: Props) {

  return (
    <div className={styles.row}>
      <span className={styles.time}>
        {message.creationTime.toLocaleString()}
      </span>
      <span className={styles.type}>{message.chatType}</span>
      <span className={styles.message}>{message.message}</span>
    </div>
  )
}
