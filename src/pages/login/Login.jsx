import React from 'react'
import styles from './Login.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getSteamLink } from 'store/slices/auth/authSlice'

export function Login() {
  const dispatch = useDispatch()
  const [link, setLink] = useState('')
  const { isLoading, isError, isSuccess } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getSteamLink()).then((result) => {
      setLink(result.payload.steamLink)
    })
  }, [dispatch])

  return (
    <div className={styles.loginPage}>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Response error</h1>}
      {isSuccess && (
        <div className={styles.loginBtn}>
          <a href={link}>войти</a>
        </div>
      )}
    </div>
  )
}
