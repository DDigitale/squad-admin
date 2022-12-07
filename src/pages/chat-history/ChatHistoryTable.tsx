import React from 'react'
import styles from './ChatHistoryTable.module.scss'
import ChatHistoryRow from 'pages/chat-history/ChatHistoryRow'

interface ChatHistoryTableProps {
  content: any
}

function ChatHistoryTable({ content: chat }: ChatHistoryTableProps) {
  return (
    <div className={styles.wrapper}>
      {chat.map((item: any) => (
        <ChatHistoryRow key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ChatHistoryTable
