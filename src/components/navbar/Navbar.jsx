import React from 'react'
import styles from './Navbar.module.scss'
import { VscTable } from 'react-icons/vsc'

export function Navbar(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <VscTable className={styles.icon} />
        <span className={styles.name}>Menu Item</span>
      </div>
      <div className={styles.item}>
        <VscTable className={styles.icon} />
        <span className={styles.name}>Menu Item</span>
      </div>
      <div className={styles.item}>
        <VscTable className={styles.icon} />
        <span className={styles.name}>Menu Item</span>
      </div>
      <div className={styles.item}>
        <VscTable className={styles.icon} />
        <span className={styles.name}>Menu Item</span>
      </div>
      <div className={styles.item}>
        <VscTable className={styles.icon} />
        <span className={styles.name}>Menu Item</span>
      </div>
      <div className={styles.item}>
        <VscTable className={styles.icon} />
        <span className={styles.name}>Menu Item</span>
      </div>
      <div className={styles.item}>
        <VscTable className={styles.icon} />
        <span className={styles.name}>Menu Item</span>
      </div>
      <div className={styles.item}>
        <VscTable className={styles.icon} />
        <span className={styles.name}>Menu Item</span>
      </div>
      <div className={styles.item}>
        <VscTable className={styles.icon} />
        <span className={styles.name}>Menu Item</span>
      </div>
    </div>
  )
}
