import React, { useEffect, useState } from 'react'
import styles from './Maps.module.scss'
import { mapsNormalized } from 'api/local/mapsNormalized'
import { MapCard } from 'modules/layers/MapCard'
import { useQuery } from '@tanstack/react-query'
import { fetchAllLayers } from 'api/layers'

interface Props {
  selectedMap: any
  selectedMode: any
}

export function Maps({ selectedMap, selectedMode }: Props) {
  const { isFetched, data: allLayersData } = useQuery(
    ['get-all-layers'],
    fetchAllLayers,
    {
      refetchOnMount: false,
    }
  )

  const filteredData = allLayersData
    ?.filter((layer: any) => {
      if (
        selectedMap?.includes(layer.rawName.split('_')[0]) &&
        selectedMode?.includes(layer.rawName.split('_')[1]) &&
        selectedMode?.length === layer.gameMode.length
      ) {
        return layer
      } else if (
        selectedMap?.includes(layer.rawName.split('_')[0]) &&
        !selectedMode
      ) {
        return layer
      } else if (
        !selectedMap &&
        selectedMode?.includes(layer.rawName.split('_')[1]) &&
        selectedMode?.length === layer.gameMode.length
      ) {
        return layer
      }
    })
    .map((layer: any) => {
      return layer
    })

  return (
    <div className={styles.wrapper}>
      {selectedMap || selectedMode ? (
        filteredData?.map((layer: any) => (
          <MapCard key={layer.rawName} layer={layer} />
        ))
      ) : (
        <span style={{ fontSize: '1.5rem', marginTop: '2rem' }}>
          выберите карту
        </span>
      )}
    </div>
  )
}
