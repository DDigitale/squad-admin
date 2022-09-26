import React, { useContext, useState } from 'react'
import styles from './Panel.module.scss'
import { useQuery } from '@tanstack/react-query'
import { fetchTeams } from 'api/users'
import { flatTeams } from 'utils'
import {
  DisconnectedPlayers,
  MapSelector,
  SearchPlayer,
  ServerInfo,
  SuspectedPlayers,
  Teams,
} from 'modules'
import { Layers } from 'modules/layers/Layers'
import {
  LayerModalContext,
  LayerModalContextType,
} from 'contexts/layer-modal-context'

export function Panel() {
  const [layerModal, setLayerModal] = useContext(
    LayerModalContext
  ) as LayerModalContextType

  const {
    data: teams,
    isLoading,
    isError,
  } = useQuery(['teams'], fetchTeams, {
    refetchInterval: 3000,
  })

  if (isLoading) {
    return <h1>Загрузка игроков</h1>
  }

  if (isError) {
    return <h1>Ошибка загрузки игроков</h1>
  }

  return (
    <div className={styles.wrapper}>
      <SearchPlayer />
      <ServerInfo />
      <main className={styles.main}>
        <Teams teams={teams} />
      </main>
      <MapSelector />
      {layerModal ? (
        <Layers />
      ) : (
        <>
          <SuspectedPlayers players={flatTeams(teams)} />
          <DisconnectedPlayers />
        </>
      )}
    </div>
  )
}
