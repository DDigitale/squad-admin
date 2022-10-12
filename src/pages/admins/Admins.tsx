import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchAdmins } from 'api/users'

export function Admins() {
  const { data: admins, isSuccess, isError } = useQuery(['admins'], fetchAdmins)
  return <div>admins</div>
}
