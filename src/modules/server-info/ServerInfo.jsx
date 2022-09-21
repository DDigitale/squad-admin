import React from 'react'
import styles from './ServerInfo.module.scss'
import backgroundImage from 'assets/img/bg-layers/bg.png'

export function ServerInfo() {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.item}>
        <span className={styles.text}>Текущий TPS</span>
        <span className={styles.text}>30</span>
      </div>
      <div className={styles.item}>
        <span className={styles.text}>Игроков на сервере</span>
        <span className={styles.text}>99/100 (+23)</span>
      </div>
      <div className={styles.item}>
        <span className={styles.text}>Текущая карта 1:49:53</span>
        <span className={styles.text}>Gorodok AAS v1</span>
      </div>
    </div>
  )
}
