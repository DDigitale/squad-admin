import React, { useContext } from 'react'
import styles from './Panel.module.scss'
import { useQuery } from '@tanstack/react-query'
import {
  fetchDisconnectedPlayers,
  fetchServerInfo,
  fetchTeams,
} from 'api/users'
import { flatTeams } from 'utils'
import {
  DisconnectedPlayers,
  MapSelector,
  ServerInfo,
  SuspectedPlayers,
  Teams,
} from 'modules'
import { Layers } from 'modules/layers/Layers'
import { LayersContext, LayersContextType } from 'contexts/layers-context'
import { Chat } from 'modules/chat/Chat'
import { errorToast } from 'utils/toasts'

export function Panel() {
  const [layersMenu, setLayersMenu] = useContext(
    LayersContext
  ) as LayersContextType

  const {
    data: teams,
    isSuccess,
    isLoading,
    isError,
  } = useQuery(['teams'], fetchTeams, {
    onError: (e: any) => errorToast('Ошибка загрузки онлайн игроков'),
    refetchInterval: 3000,
  })

  const { data: server } = useQuery(['server'], fetchServerInfo, {
    onError: (e: any) => errorToast('Ошибка загрузки данных о сервере'),
    refetchInterval: 3000,
  })

  const { data: disconnectedPlayers } = useQuery(
    ['players', 'disconnected'],
    fetchDisconnectedPlayers,
    {
      onError: (e: any) => errorToast(`Ошибка загрузки отключившихся игроков`),
      refetchInterval: 3000,
    }
  )

  // if (isLoading) {
  //   return <h1>a</h1>
  // }

  return (
    <div className={styles.wrapper}>
      <Chat />
      <ServerInfo server={server} />
      <main className={styles.main}>
        {isSuccess && <Teams teams={teams} />}
      </main>
      <MapSelector nextLayer={server?.nextLayer} />
      {layersMenu ? (
        <Layers />
      ) : (
        <>
          {isSuccess && <SuspectedPlayers players={flatTeams(teams)} />}
          <DisconnectedPlayers disconnectedPlayers={disconnectedPlayers} />
        </>
      )}
    </div>
  )
}
