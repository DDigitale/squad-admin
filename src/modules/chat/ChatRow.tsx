import React, { forwardRef, useContext, useState } from 'react'
import styles from './ChatRow.module.scss'
import { BiMessageSquareError } from 'react-icons/bi'
import { VscCheck } from 'react-icons/vsc'
import { VscChromeClose } from 'react-icons/vsc'
import { ChatMessage } from 'types/players'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { warnPlayer } from 'api/users'

interface Props {
  message: ChatMessage
}

export const ChatRow = forwardRef<HTMLDivElement, Props>(function ChatRow(
  { message },
  ref
) {
  const queryClient = useQueryClient()
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const [warnReason, setWarnReason] = useState('')

  const warnPlayerMutation = useMutation(
    () => warnPlayer(message.steamId, warnReason, message.playerName),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  const rowColor = () => {
    if (message.chatType === 'ChatAll') return '#4ba8fe'
    if (message.chatType === 'ChatTeam') return '#4ba8fe'
    if (message.chatType === 'ChatSquad') return '#33fd55'
    if (message.chatType === 'ChatAdmin') return '#33fdd9'
  }

  const handleWarn = (e: any) => {
    setWarnReason(e.target.value)
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
      <span className={styles.type}>{message.chatType}</span>

      <span className={styles.message}>
        <BiMessageSquareError
          className={styles.warn}
          onClick={() =>
            toast(
              (t) => (
                <div className={styles.toast}>
                  <span>Сообщение игроку {message.playerName}</span>
                  <div className={styles.inputWrapper}>
                    <input
                      type="text"
                      placeholder="Введите сообщение..."
                      maxLength={100}
                      onChange={handleWarn}
                      defaultValue={warnReason}
                    />
                    <VscCheck
                      className={styles.sendIcon}
                      onClick={() => warnPlayerMutation.mutate()}
                    />
                    <VscChromeClose
                      className={styles.closeIcon}
                      onClick={() => toast.dismiss()}
                    />
                  </div>
                </div>
              ),
              {
                position: 'top-center',
                style: {
                  minWidth: '30rem',
                },
              }
            )
          }
        />{' '}
        {message.message}
      </span>
    </div>
  )
})
