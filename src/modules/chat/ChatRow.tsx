import React, { forwardRef, useContext } from 'react'
import styles from './ChatRow.module.scss'
import { ChatMessage } from 'types/players'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'

interface Props {
  message: ChatMessage
}

export const ChatRow = forwardRef<HTMLDivElement, Props>(function ChatRow(
  { message },
  ref
) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  return (
    <div className={styles.row} ref={ref}>
      <span className={styles.time}>
        {message.time.toLocaleTimeString('ru')}
      </span>
      <span
        className={styles.name}
        onClick={() => setPlayerModal(message.steamId)}
      >
        {message.playerName}
      </span>
      <span className={styles.type}>{message.chatType}</span>
      <span className={styles.message}>{message.message}</span>
    </div>
  )
})
