import React, { useContext } from 'react'
import styles from './ChatRow.module.scss'
import { Chat } from 'types/players'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'

interface Props {
  message: Chat
}

export function ChatRow({ message }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const time = new Date(Date.parse(message.time)).toLocaleTimeString('ru')
  console.log()

  return (
    <div className={styles.row}>
      <span
        className={styles.name}
        onClick={() => setPlayerModal(message.steamId)}
      >
        {message.playerName}
      </span>
      <span className={styles.type}>{message.chatType}</span>
      <span className={styles.message}>{message.message}</span>
      <span className={styles.time}>{time}</span>
    </div>
  )
}
