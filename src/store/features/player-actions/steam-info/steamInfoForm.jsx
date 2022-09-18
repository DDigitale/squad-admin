import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSteamInfo, steamInfoRequest } from './steamInfoSlice'

export function SteamInfoForm(props) {
  const { steam64id } = props
  const dispatch = useDispatch()
  const { isLoading, isSuccess, isError } = useSelector(selectSteamInfo)

  // useEffect(() => {
  // 	dispatch(steamInfoRequest(steam64id))
  // }, []);

  return <div></div>
}
