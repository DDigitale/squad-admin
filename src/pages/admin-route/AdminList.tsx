import React, { useState } from 'react'
import AdminListRow from 'pages/admin-route/AdminListRow'
import styles from 'pages/admin-route/AdminList.module.scss'
import { Button, IconButton, Input, Loader, Stack } from 'rsuite'
import SearchIcon from '@rsuite/icons/Search'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchAddAdmin } from 'api/admins'

interface Props {
  adminsList: any
  roleGroups: any
}

function AdminList({ adminsList, roleGroups }: Props) {
  const queryClient = useQueryClient()
  const [adminSteamId, setAdminSteamId] = useState('')

  const addAdminMutation = useMutation(() => fetchAddAdmin(adminSteamId), {
    onSuccess: () => queryClient.invalidateQueries(['admin-steamIds']),
  })

  const handleAddAdmin = () => {
    addAdminMutation.mutate()
  }

  const sortAdmins = (a: any) => {
    if (a.role === null) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <>
      <Stack spacing={8} style={{ marginBottom: '1rem' }}>
        <Input
          maxLength={17}
          value={adminSteamId}
          onChange={(e: any) => setAdminSteamId(e)}
          placeholder="Введите steamId"
        />
        {adminSteamId.toString().length > 16 && (
          <IconButton
            size="md"
            href={`http://steamcommunity.com/profiles/${adminSteamId}`}
            target="_blank"
            icon={<SearchIcon />}
          />
        )}
        <Button
          onClick={handleAddAdmin}
          appearance="subtle"
          color="green"
          disabled={adminSteamId.toString().length < 17}
        >
          Добавить
        </Button>
      </Stack>
      <div className={styles.wrapper}>
        {!adminsList && (
          <Loader size="md" center={true} content="загрузка..." vertical />
        )}
        {adminsList?.sort(sortAdmins).map((admin: any) => (
          <AdminListRow
            key={admin.steamId}
            roleGroups={roleGroups}
            admin={admin}
          />
        ))}
      </div>
    </>
  )
}

export default AdminList
