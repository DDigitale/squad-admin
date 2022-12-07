import { useDispatch, useSelector } from 'react-redux'
import styles from './PrivateRoute.module.scss'
import { selectVerifyInfo, verifySteam } from 'store'
import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Layout } from 'layout'
import Header from 'components/header/Header'
import { Spinner } from 'components/spinner/Spinner'
import { useQuery } from '@tanstack/react-query'
import { fetchBackendStatus } from 'api/admins'
import { errorToast } from 'utils/toasts'

const urlSearchParams = new URLSearchParams(window.location.search)
export const openidParams = Object.fromEntries(urlSearchParams.entries())

export const PrivateRoutes = () => {
  const dispatch = useDispatch()
  const { isLoading, isError, isSuccess } = useSelector(selectVerifyInfo)
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!token) {
      dispatch(verifySteam(openidParams))
    }
  }, [])

  isSuccess && window.location.replace('/')

  return (
    <>
      {isLoading && <Spinner />}
      {token && (
        <div className={styles.wrapper}>
          <Header />
          <Layout>
            <Outlet />
          </Layout>
        </div>
      )}
      {isError && <Navigate to="/login" />}
    </>
  )
}
