import React, { useRef } from 'react'
import styles from './Modal.module.scss'

import { createPortal } from 'react-dom'

export function Modal({ children, onClose }) {
  const modalRoot = document.getElementById('modalRoot')

  const innerRef = useRef(null)

  const handleClick = (e) => {
    if (!innerRef.current.contains(e.target)) onClose()
  }

  const handleKeyDown = (e) => {
    if (e.code === 'Escape') onClose()
  }

  return createPortal(
    <div
      className={styles.wrapper}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className={styles.modal} ref={innerRef}>
        {children}
      </div>
    </div>,
    modalRoot
  )
}
