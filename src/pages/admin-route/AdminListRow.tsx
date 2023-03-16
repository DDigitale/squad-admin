import React, { useContext, useState } from 'react'
import styles from 'pages/admin-route/AdminListRow.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import CheckIcon from '@rsuite/icons/Check'
import { fetchDeactivateAdmin, fetchSetRoleGroupToAdmin } from 'api/admins'
import toast from 'react-hot-toast'
import { IconButton, SelectPicker } from 'rsuite'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  admin: any
  roleGroups: any
}

function AdminListRow({ admin, roleGroups }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType
  const queryClient = useQueryClient()
  const [adminSteamId, setAdminSteamId] = useState('')
  const [roleGroupId, setRoleGroupId] = useState('')

  const setRoleGroupToAdminMutation = useMutation(
    () => fetchSetRoleGroupToAdmin(roleGroupId, adminSteamId),
    {
      onSuccess: () => queryClient.invalidateQueries(['admin-steamIds']),
    }
  )

  const deactivateAdminMutation = useMutation(() =>
    fetchDeactivateAdmin(adminSteamId)
  )

  const handleDeactivateAdmin = async (steamId: any, name: string) => {
    const alertMessage = confirm(`Деактивировать админа ${name}?`)
    if (alertMessage) {
      await setAdminSteamId(steamId)
      await deactivateAdminMutation.mutate()
    } else {
      return
    }
  }

  const handleSetRoleGroupToAdmin = () => {
    const alertMessage = confirm(`Сменить роль?`)
    if (alertMessage) {
      setRoleGroupToAdminMutation.mutate()
    } else {
      return
    }
  }

  const location = useLocation()

  return (
    <div
      className={styles.row}
      style={{
        display: admin.name.includes('Rotation') ? 'none' : '',
      }}
    >
      <img
        style={{ width: 80, height: 80, borderRadius: '0.3rem' }}
        src={admin.avatarFull}
      />
      <div className={styles.info}>
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          <span className={styles.badge}>
            Создан {new Date(admin.createTime).toLocaleString()}
          </span>
          <span className={styles.badge}>
            Изменён {new Date(admin.modifiedTime).toLocaleString()}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          <Link
            onClick={() => setPlayerModal(admin.steamId)}
            to={`/player/${admin.steamId}`}
            state={{ background: location }}
            style={{ whiteSpace: 'nowrap' }}
          >
            {admin.name}
          </Link>
          <a
            href={`http://steamcommunity.com/profiles/${admin.steamId}`}
            target="_blank"
          >
            {admin.steamId}
          </a>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {admin.role ? (
            <>
              {admin?.role.roles.map((role: any) => (
                <span
                  className={styles.badge}
                  key={role.role.id}
                  title={role.role.description}
                >
                  {role.role.name}
                </span>
              ))}
            </>
          ) : null}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          marginLeft: 'auto',
        }}
      >
        {admin?.role !== null ? (
          <button
            className={styles.actions}
            onClick={() => handleDeactivateAdmin(admin.steamId, admin.name)}
          >
            Деактивировать
          </button>
        ) : null}
        <button
          className={styles.actions}
          onClick={() =>
            toast(
              (t) => (
                <div className={styles.toast}>
                  <span>Изменить роль админу {admin.name}</span>
                  <span>
                    Текущая роль:{' '}
                    {admin?.role !== null
                      ? admin.role.name
                      : 'Нет активной роли'}
                  </span>
                  <span
                    style={{
                      display: 'flex',
                      gap: '0.3rem',
                      alignItems: 'center',
                    }}
                  >
                    Сменить на:{' '}
                    <SelectPicker
                      data={roleGroups?.map((role: any) => ({
                        value: role.id,
                        label: role.name,
                      }))}
                      cleanable={false}
                      searchable={false}
                      size="sm"
                      onSelect={(e) => {
                        setRoleGroupId(e)
                        setAdminSteamId(admin.steamId)
                      }}
                    />
                    <IconButton
                      size="sm"
                      icon={<CheckIcon />}
                      onClick={() => handleSetRoleGroupToAdmin()}
                    />
                  </span>
                </div>
              ),
              {
                position: 'top-center',
                style: {
                  minWidth: '30rem',
                },
              }
            )
          }
        >
          {admin?.role !== null ? 'Изменить роль' : 'Активировать'}
        </button>
        {/*<button className={styles.actions}>Ещё кнопка</button>*/}
      </div>
    </div>
  )
}

export default AdminListRow
