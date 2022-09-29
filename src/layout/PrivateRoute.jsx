import { useDispatch, useSelector } from 'react-redux'
import { selectVerifyInfo, verifySteam } from 'store'
import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Layout } from 'layout'

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
      {isLoading && <h1>LOADING</h1>}
      {token && (
        <Layout>
          <Outlet />
        </Layout>
      )}
      {isError && <Navigate to="/login" />}
    </>
  )
}
