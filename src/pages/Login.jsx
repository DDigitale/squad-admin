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
    <div className="login-page">
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Response error</h1>}
      {isSuccess && (
        <div className="login-btn">
          <a href={link}>войти</a>
        </div>
      )}
    </div>
  )
}
