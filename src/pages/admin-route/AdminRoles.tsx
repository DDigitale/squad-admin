import React, { useState } from 'react'
import styles from 'pages/admin-route/AdminRoles.module.scss'
import CloseOutlineIcon from '@rsuite/icons/CloseOutline'
import { Button, IconButton, Input, SelectPicker, Stack } from 'rsuite'
import AddOutlineIcon from '@rsuite/icons/AddOutline'
import PlusIcon from '@rsuite/icons/Plus'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  fetchAddRoleGroup,
  fetchAddRoleInRoleGroup,
  fetchGetAllRoles,
  fetchRemoveRoleFromRoleGroup,
  fetchRemoveRoleGroup,
} from 'api/admins'

interface Props {
  roleGroups: any
}

function AdminRoles({ roleGroups }: Props) {
  const queryClient = useQueryClient()
  const [roleGroupName, setRoleGroupName] = useState('')
  const [roleGroupId, setRoleGroupId] = useState(0)
  const [roleId, setRoleId] = useState(0)
  const [active, setActive] = useState(false)

  const { data: rolesList } = useQuery(['roles'], fetchGetAllRoles)

  const addRoleGroupMutation = useMutation(
    () => fetchAddRoleGroup(roleGroupName),
    {
      onSuccess: () => queryClient.invalidateQueries(['admin-roleGroup']),
    }
  )
  const removeRoleGroupMutation = useMutation(
    () => fetchRemoveRoleGroup(roleGroupId),
    {
      onSuccess: () => queryClient.invalidateQueries(['admin-roleGroup']),
    }
  )

  const addRoleInRoleGroupMutation = useMutation(
    () => fetchAddRoleInRoleGroup(roleId, roleGroupId),
    {
      onSuccess: () => queryClient.invalidateQueries(['admin-roleGroup']),
    }
  )

  const removeRoleFromRoleGroupMutation = useMutation(
    () => fetchRemoveRoleFromRoleGroup(roleId, roleGroupId),
    {
      onSuccess: () => queryClient.invalidateQueries(['admin-roleGroup']),
    }
  )

  const handleDeleteGroup = async (groupId: number) => {
    await setRoleGroupId(groupId)
    await removeRoleGroupMutation.mutate()
  }

  const handleDeleteRoleFromGroup = async (
    roleId: number,
    roleGroupId: number
  ) => {
    await setRoleId(roleId)
    await setRoleGroupId(roleGroupId)
    await removeRoleFromRoleGroupMutation.mutate()
  }

  const handleShowSelectRoles = (id: any) => {
    setActive((prevState) => {
      return prevState === id ? null : id
    })
  }

  return (
    <div className={styles.group}>
      <Stack spacing={8} alignItems="flex-start">
        <Input
          maxLength={17}
          value={roleGroupName}
          onChange={(e: any) => setRoleGroupName(e)}
          placeholder="Введите название"
        />
        <Button
          onClick={() => addRoleGroupMutation.mutate()}
          appearance="subtle"
          color="green"
          disabled={roleGroupName.toString().length < 4}
        >
          Добавить группу
        </Button>
      </Stack>
      <div className={styles.wrapper}>
        {roleGroups?.map((group: any) => (
          <div key={group.id} className={styles.row}>
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '0.5rem',
                alignItems: 'center',
              }}
            >
              <span>Группа:</span>
              <span className={styles.badge}>
                {group.name}{' '}
                <CloseOutlineIcon
                  className={styles.deleteBtn}
                  onClick={() => handleDeleteGroup(group.id)}
                />
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '0.5rem',
                alignItems: 'center',
              }}
            >
              <span>Роли:</span>
              {group.roles.map((role: any) => (
                <span
                  key={role.role.id}
                  className={styles.badge}
                  title={role.role.description}
                >
                  {role.role.name}
                  <CloseOutlineIcon
                    className={styles.deleteBtn}
                    onClick={() =>
                      handleDeleteRoleFromGroup(role.role.id, group.id)
                    }
                  />
                </span>
              ))}
              <AddOutlineIcon
                className={styles.addBtn}
                onClick={() => handleShowSelectRoles(group.id)}
              />
              <span
                style={{
                  display: active === group.id ? 'flex' : 'none',
                }}
              >
                <SelectPicker
                  style={{ marginRight: '0.5rem' }}
                  data={rolesList?.map((role: any) => ({
                    value: role.id,
                    label: role.name,
                  }))}
                  cleanable={false}
                  searchable={false}
                  size="xs"
                  onSelect={(e) => {
                    setRoleId(e)
                    setRoleGroupId(group.id)
                  }}
                />

                <IconButton
                  size="xs"
                  icon={<PlusIcon />}
                  onClick={() => addRoleInRoleGroupMutation.mutate()}
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminRoles
