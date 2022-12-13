import React from 'react'
import styles from './LogoutBtn.module.scss'
import { fetchLogout } from 'api/users'

export function LogoutBtn() {
  const logoutHandler = async () => {
    await fetchLogout()
    await localStorage.clear()
    await document.location.reload()
  }

  return (
    <>
      <button className={styles.button} onClick={logoutHandler}>
        Выйти
      </button>
    </>
  )
}
