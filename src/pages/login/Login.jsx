import React from 'react'
import styles from './Login.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getSteamLink } from 'store/slices/auth/authSlice'
import { Loader } from 'rsuite'

export function Login() {
  const dispatch = useDispatch()
  const [link, setLink] = useState('')
  const { isLoading, isSuccess } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getSteamLink()).then((result) => {
      setLink(result.payload.steamLink)
    })
  }, [dispatch])

  return (
    <div className={styles.loginPage}>
      {isLoading && (
        <Loader size="lg" backdrop content="загрузка..." vertical />
      )}
      {isSuccess && (
        <a className={styles.loginBtn} href={link}>
          войти
        </a>
      )}
    </div>
  )
}
