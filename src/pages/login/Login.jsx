import React from 'react'
import styles from './Login.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getSteamLink } from 'store/slices/auth/authSlice'
import { Spinner } from 'components/spinner/Spinner'

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
      {isLoading && <Spinner />}
      {isSuccess && (
        <a className={styles.loginBtn} href={link}>
          войти
        </a>
      )}
    </div>
  )
}
