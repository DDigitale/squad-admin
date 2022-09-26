import React from 'react'
import styles from './Maps.module.scss'
import { mapsNormalized } from 'api/local/mapsNormalized'
import { MapCart } from 'modules/layers/MapCart'

interface Props {
  selectedMap: any
  selectedMode: any
}

export function Maps({ selectedMap, selectedMode }: Props) {
  const filteredData = mapsNormalized
    .filter((layer) => {
      if (
        selectedMap.includes(layer.rawName.split('_')[0]) &&
        selectedMode.includes(layer.rawName.split('_')[1]) &&
        selectedMode.length === layer.gamemode.length
      ) {
        return layer
      } else if (
        selectedMap.includes(layer.rawName.split('_')[0]) &&
        !selectedMode
      ) {
        return layer
      } else if (
        !selectedMap &&
        selectedMode.includes(layer.rawName.split('_')[1]) &&
        selectedMode.length === layer.gamemode.length
      ) {
        return layer
      }
    })
    .map((layer) => {
      return layer
    })

  return (
    <div className={styles.wrapper}>
      {selectedMap || selectedMode ? (
        filteredData.map((layer) => <MapCart layer={layer} />)
      ) : (
        <h1>Выберите карту</h1>
      )}
    </div>
  )
}
