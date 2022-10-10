import React from 'react'
import styles from './LogoutBtn.module.scss'

export function LogoutBtn() {
  const logoutHandler = () => {
    localStorage.clear()
    document.location.reload()
  }

  return (
    <>
      <button className={styles.button} onClick={logoutHandler}>
        Выйти
      </button>
    </>
  )
}
