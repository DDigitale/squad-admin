import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchAdmins } from 'api/users'
import maps from 'api/maps.json'
import setups from 'api/setups.json'

export function Admins() {
  const { data: admins, isSuccess, isError } = useQuery(['admins'], fetchAdmins)
  const [jsonData, setJsonData] = useState(maps)
  const [jsonData2, setJsonData2] = useState(setups)

  console.log(jsonData.maps.map((map) => map.Name))
  console.log(jsonData2.setups.map((setup) => setup.setup_Name))

  return <div>admins</div>
}
