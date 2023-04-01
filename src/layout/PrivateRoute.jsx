import { useDispatch, useSelector } from 'react-redux'
import styles from './PrivateRoute.module.scss'
import { selectVerifyInfo, verifySteam } from 'store'
import React, { useLayoutEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Layout } from 'layout'
import Header from 'components/header/Header'
import { Loader } from 'rsuite'

const urlSearchParams = new URLSearchParams(window.location.search)
export const openidParams = Object.fromEntries(urlSearchParams.entries())

export const PrivateRoutes = () => {
  const dispatch = useDispatch()
  const { isLoading, isError, isSuccess } = useSelector(selectVerifyInfo)
  const access = localStorage.getItem('access')

  useLayoutEffect(() => {
    if (!access) {
      dispatch(verifySteam(openidParams))
      localStorage.setItem('server', 'oc1')
    }
  }, [])

  isSuccess && window.location.replace('/')

  return (
    <>
      {isLoading && (
        <Loader size="lg" backdrop content="загрузка..." vertical />
      )}
      {access && (
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
