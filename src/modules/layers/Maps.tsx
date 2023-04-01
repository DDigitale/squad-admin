import React, { useEffect, useState } from 'react'
import styles from './Maps.module.scss'
import { mapsNormalized } from 'api/local/mapsNormalized'
import { MapCard } from 'modules/layers/MapCard'
import { useQuery } from '@tanstack/react-query'
import { fetchAllLayers, fetchAllRotationGroups } from 'api/layers'

interface Props {
  selectedMap: any
  selectedMode: any
  allLayersData: any
}

export function Maps({ selectedMap, selectedMode, allLayersData }: Props) {
  const { data: allRotationGroups } = useQuery(
    ['rotations'],
    fetchAllRotationGroups,
    {
      refetchOnMount: false,
    }
  )

  const activeRotationMaps = allRotationGroups?.rotations
    ?.filter((r: any) => r.isActive === true)[0]
    ?.maps?.map((m: any) => m.map)

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
      {selectedMap || selectedMode
        ? filteredData?.map((layer: any) => (
            <MapCard key={layer.rawName} layer={layer} />
          ))
        : activeRotationMaps?.map((layer: any) => (
            <MapCard
              nextLayerFromRotation={allRotationGroups.nextMapPosition}
              key={layer.rawName}
              layer={layer}
            />
          ))}
    </div>
  )
}
