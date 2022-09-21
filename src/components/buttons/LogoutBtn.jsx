import React, { useEffect } from 'react'
import { logoutResponse, selectLogout, selectLogoutInfo } from 'store'
import { useDispatch, useSelector } from 'react-redux'

export function LogoutBtn(props) {
  const dispatch = useDispatch()
  const { isLoading, isError, isSuccess } = useSelector(selectLogoutInfo)
  const logout = useSelector(selectLogout)

  const logoutHandler = () => {
    // dispatch(logoutResponse())
    localStorage.clear()
  }

  return (
    <>
      <button className="logout-btn" onClick={logoutHandler}>
        Выйти
      </button>
    </>
  )
}
