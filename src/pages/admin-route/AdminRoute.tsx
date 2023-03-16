import { useQuery } from '@tanstack/react-query'
import { fetchGetAllRoleGroups } from 'api/admins'
import { fetchAdmins } from 'api/users'
import AdminList from 'pages/admin-route/AdminList'
import AdminRoles from 'pages/admin-route/AdminRoles'
import styles from 'pages/admin-route/AdminRoute.module.scss'
import AdminRules from 'pages/admin-route/AdminRules'
import Rotation from 'pages/admin-route/Rotation/Rotation'
import { useState } from 'react'
import {
  Radio,
  RadioGroup
} from 'rsuite'

function AdminRoute() {
  const [selectedRadio, setSelectedRadio] = useState('')

  const { data: adminsList } = useQuery(['admin-steamIds', false], () =>  fetchAdmins(false))

  const { data: roleGroups } = useQuery(
    ['admin-roleGroup'],
    fetchGetAllRoleGroups
  )

  const roles = localStorage.getItem('roles')

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <RadioGroup
            name="radioList"
            inline
            appearance="picker"
            // defaultValue="A"
            value={selectedRadio}
            onChange={(e: any) => setSelectedRadio(e)}
            style={{ justifyContent: 'space-around', width: '100%' }}
          >
            {roles?.includes('Admins Management') ? (
              <Radio value="A">Управление админами</Radio>
            ) : null}
            {roles?.includes('Roles Management') ? (
              <Radio value="B">Управление ролями</Radio>
            ) : null}
            {roles?.includes('Rules Management') ? (
              <Radio value="C">Управление опциями</Radio>
            ) : null}
            {roles?.includes('Rotation Management') ? (
              <Radio value="D">Управление ротацией</Radio>
            ) : null}
          </RadioGroup>
        </div>
        <div>
          {selectedRadio === 'A' ? (
            <AdminList roleGroups={roleGroups} adminsList={adminsList} />
          ) : null}
          {selectedRadio === 'B' ? (
            <AdminRoles roleGroups={roleGroups} />
          ) : null}
          {selectedRadio === 'C' ? <AdminRules /> : null}
          {selectedRadio === 'D' ? <Rotation /> : null}
        </div>
      </div>
    </div>
  )
}

export default AdminRoute
