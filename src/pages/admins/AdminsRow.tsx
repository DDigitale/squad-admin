import React from 'react'
import styles from './AdminsRow.module.scss'

interface Props {
  admin: any
}

function AdminsRow({ admin }: Props) {
  const time = new Date(Date.parse(admin.createTime)).toLocaleString('ru')

  return (
    <div className={styles.row}>
      <img className={styles.avatar} src={admin.avatarFull} />
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
          {admin.role ? (
            <span
              className={styles.badge}
              key={admin.role.id}
              title={admin.role.description}
            >
              {admin.role.name}
            </span>
          ) : null}
        </div>
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          <span style={{ whiteSpace: 'nowrap' }}>{admin.name}</span>
          <a
            href={`http://steamcommunity.com/profiles/${admin.steamId}`}
            target="_blank"
          >
            {admin.steamId}
          </a>
        </div>
      </div>
    </div>
  )
}

export default AdminsRow
