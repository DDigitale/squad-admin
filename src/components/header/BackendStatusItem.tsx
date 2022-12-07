import React from 'react'
import styles from './BackendStatusItem.module.scss'

function BackendStatusItem({ backendInfo, children }: any) {
  const time = new Date(backendInfo).toLocaleString('ru-RU')

  return (
    <div className={styles.wrapper}>
      {children}
      <div>
        <span>{time}</span>
        <span></span>
      </div>
    </div>
  )
}

export default BackendStatusItem
