import React from 'react'

export function ChatRow({ message }) {
  return (
    <div>
      <span>{message.chatType}</span>
      <span>{message.message}</span>
      <span>{message.creationTime}</span>
    </div>
  )
}
