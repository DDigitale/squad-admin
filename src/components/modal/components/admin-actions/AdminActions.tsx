import React, { useState } from 'react'
import AdminActionsRow from 'components/modal/components/admin-actions/AdminActionsRow'
import { useQuery } from '@tanstack/react-query'
import { fetchAdminActionsWithPlayer, fetchPlayerMessages } from 'api/users'
import styles from './AdminActions.module.scss'
import { Loader, Pagination } from 'rsuite'

interface Props {
  playerSteamId: any
}

function AdminActions({ playerSteamId }: Props) {
  const [activePage, setActivePage] = useState(1)
  const [pageLimit, setPageLimit] = useState(30)

  const {
    data: actions,
    isSuccess,
    isLoading,
  } = useQuery(['player', playerSteamId, activePage], () =>
    fetchAdminActionsWithPlayer(playerSteamId, activePage, pageLimit)
  )

  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <Loader size="md" center={true} content="загрузка..." vertical />
      )}
      {isSuccess && (
        <>
          {actions?.content?.map((action: any) => (
            <AdminActionsRow key={action.id} action={action} />
          ))}
          <Pagination
            style={{ margin: '0 auto', padding: '0.5rem' }}
            layout={['pager', '|', 'total']}
            prev
            last
            next
            first
            ellipsis
            maxButtons={5}
            boundaryLinks
            size="sm"
            total={actions.totalElements}
            limit={pageLimit}
            activePage={activePage}
            onChangePage={(e: any) => setActivePage(e)}
          />
        </>
      )}
    </div>
  )
}

export default AdminActions
