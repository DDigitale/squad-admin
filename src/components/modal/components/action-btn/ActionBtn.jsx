import React from 'react'
import styles from './ActionBtn.module.scss'

export function ActionBtn({ text, ...props }) {
  return (
    <>
      <button className={styles.actionBtn} {...props}>
        {text}
      </button>
    </>
  )
}
