import React, { forwardRef, useContext } from 'react'
import styles from './ChatRow.module.scss'
import { TbMessageReport } from 'react-icons/tb'
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

  const rowColor = () => {
    if (message.chatType === 'ChatAll') return '#4ba8fe'
    if (message.chatType === 'ChatTeam') return '#4ba8fe'
    if (message.chatType === 'ChatSquad') return '#33fd55'
    if (message.chatType === 'ChatAdmin') return '#33fdd9'
  }

  return (
    <div className={styles.row} ref={ref} style={{ color: `${rowColor()}` }}>
      <span className={styles.time}>
        {message.time.toLocaleTimeString('ru')}
      </span>
      <span
        className={styles.name}
        onClick={() => setPlayerModal(message.steamId)}
      >
        {message.playerName}
      </span>
      <span className={styles.type}>
        {message.chatType} <TbMessageReport className={styles.warn} />
      </span>
      <span className={styles.message}>{message.message}</span>
    </div>
  )
})
