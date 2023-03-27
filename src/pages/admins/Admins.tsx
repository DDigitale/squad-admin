import { useQuery } from '@tanstack/react-query'
import { fetchAdmins } from 'api/users'
import AdminsTable from 'pages/admins/AdminsTable'
import styles from './Admins.module.scss'
import { Loader } from 'rsuite'

export function Admins() {
  const {
    data: admins,
    isSuccess,
    isError,
  } = useQuery(['admins', true], () => fetchAdmins(true))

  if (!admins) {
    return <Loader size="lg" backdrop content="загрузка..." vertical />
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.tableWrapper}>
        <AdminsTable admins={admins} />
      </div>
    </div>
  )
}
