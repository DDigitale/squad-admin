import React from 'react'
import styles from './LogoutBtn.module.scss'
import { useDispatch } from 'react-redux'
import { fetchLogout } from 'api/users'

export function LogoutBtn() {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    localStorage.clear()
    fetchLogout()
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
