import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchAdminsLog } from 'api/users'

export function AdminsLog() {
  const {
    data: admins,
    isSuccess,
    isError,
  } = useQuery(['admins'], fetchAdminsLog)

  console.log(admins)

  return <div>adminslog</div>
}
