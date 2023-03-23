import React, { ComponentPropsWithoutRef, useRef } from 'react'
import styles from './Modal.module.scss'
import { createPortal } from 'react-dom'
import classnames from 'classnames'
import { Outlet, useLocation } from 'react-router-dom'

type innerElRef = React.MutableRefObject<HTMLDivElement | null>

interface Props extends ComponentPropsWithoutRef<'div'> {
  onClose: Function
  innerElRefs?: innerElRef[]
}

export function Modal({ children, className, onClose, innerElRefs }: Props) {
  const modalRoot = document.getElementById('modalRoot')

  const innerRef = useRef<HTMLDivElement | null>(null)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (innerElRefs) {
      for (const innerElRef of innerElRefs) {
        if (!innerRef.current) continue
        if (innerElRef.current?.contains(e.target as Node)) return
      }
    } else {
      if (!innerRef.current) return
      if (innerRef.current.contains(e.target as Node)) return
    }
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Escape') onClose()
  }

  if (!modalRoot) throw new Error('Modal root not found')

  return createPortal(
    <>
      <div
        className={styles.wrapper}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div className={classnames(className, styles.modal)} ref={innerRef}>
          {children}
        </div>
      </div>
      <Outlet />
    </>,
    modalRoot
  )
}

// return state?.background ? (
//   createPortal(
//     <div
//       className={styles.wrapper}
//       onClick={handleClick}
//       onKeyDown={handleKeyDown}
//       tabIndex={0}
//     >
//       <div className={classnames(className, styles.modal)} ref={innerRef}>
//         {children}
//       </div>
//       <Outlet />
//     </div>,
//     modalRoot
//   )
// ) : (
//   <Outlet />
// )
