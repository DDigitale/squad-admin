import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchAddAdmin, fetchGetAllRoleGroups } from 'api/admins'
import {
  Button,
  Container,
  IconButton,
  Input,
  Panel,
  PanelGroup,
  Stack,
} from 'rsuite'
import SearchIcon from '@rsuite/icons/Search'
import { fetchAdmins } from 'api/users'
import AdminList from 'pages/admin-route/AdminList'
import styles from 'pages/admin-route/AdminRoute.module.scss'
import AdminRoles from 'pages/admin-route/AdminRoles'
import AdminRules from 'pages/admin-route/AdminRules'

function AdminRoute() {
  const queryClient = useQueryClient()
  const [adminSteamId, setAdminSteamId] = useState('')

  const { data: adminsList } = useQuery(['admin-steamIds'], fetchAdmins)

  const { data: roleGroups } = useQuery(
    ['admin-roleGroup'],
    fetchGetAllRoleGroups
  )

  const addAdminMutation = useMutation(() => fetchAddAdmin(adminSteamId), {
    onSuccess: () => queryClient.invalidateQueries(['admin-steamIds']),
  })

  // const { data: optionsData } = useQuery(['options'], fetchGetRules)

  const handleAddAdmin = () => {
    addAdminMutation.mutate()
  }

  const roles = localStorage.getItem('roles')

  return (
    <Container style={{ maxWidth: 1400, margin: '0 auto' }}>
      <PanelGroup accordion bordered>
        {roles?.includes('Admins Management') ? (
          <Panel header="Управление админами" eventKey={1} id="panel1">
            <Stack
              spacing={8}
              alignItems="flex-start"
              style={{ marginBottom: '1rem' }}
            >
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
              <AdminList roleGroups={roleGroups} adminsList={adminsList} />
            </div>
          </Panel>
        ) : null}
        {roles?.includes('Roles Management') ? (
          <Panel header="Управление ролями" eventKey={2} id="panel2">
            <div className={styles.wrapper}>
              <AdminRoles roleGroups={roleGroups} />
            </div>
          </Panel>
        ) : null}
        {roles?.includes('Rules Management') ? (
          <Panel header="Управление опциями" eventKey={3} id="panel3">
            <div className={styles.wrapper}>
              <AdminRules />
            </div>
          </Panel>
        ) : null}
        {roles?.includes('Rotation Management') ? (
          <Panel header="Управление ротацией" eventKey={4} id="panel4">
            <div className={styles.wrapper}>Модуль ротации</div>
          </Panel>
        ) : null}
      </PanelGroup>
    </Container>
  )
}

export default AdminRoute
