import { useQuery } from '@tanstack/react-query';
import { fetchAdmins } from 'api/users';
import AdminsTable from 'pages/admins/AdminsTable';
import styles from './Admins.module.scss';

export function Admins() {
  const { data: admins, isSuccess, isError } = useQuery(['admins', true], () => fetchAdmins(true))

  return (
    <div className={styles.wrapper}>
      <div className={styles.tableWrapper}>
        <AdminsTable admins={admins} />
      </div>
    </div>
  )
}
