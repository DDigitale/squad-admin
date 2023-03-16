import styles from './AdminsRow.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'

interface Props {
  admin: any
}

function AdminsRow({ admin }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType
  const time = new Date(Date.parse(admin.createTime)).toLocaleString('ru')

  const location = useLocation()

  return (
    <div
      className={styles.row}
      style={{
        display: admin.name.includes('Rotation') ? 'none' : '',
      }}
    >
      <img className={styles.avatar} src={admin.avatarFull} />
      <div className={styles.info}>
        <div>
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
            className={styles.steamId}
          >
            {admin.steamId}
          </a>
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
        <div className={styles.counters}>
          <span>Банов: {admin.BanPlayer}</span>
          <span>Разбанов: {admin.Unban}</span>
          <span>Киков: {admin.KickPlayer}</span>
          <span>Варнов: {admin.WarnPlayer + admin.WarnSquad}</span>
          <span>Расформирований: {admin.DisbandSquad}</span>
          <span>Входов в камеру: {admin.EnteredInAdminCam}</span>
          <span>Сменил команду: {admin.PlayerTeamChange}</span>
        </div>
      </div>
    </div>
  )
}

export default AdminsRow
