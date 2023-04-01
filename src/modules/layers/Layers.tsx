import React, { useState } from 'react'
import styles from './Layers.module.scss'
import { Maps } from 'modules/layers/Maps'
import { mapNamesList } from 'api/local/mapNamesList'
import Select from 'react-select'
import { gameModesList } from 'api/local/gameModesList'
import { customSelectorStyles } from 'components/forms/SelectorStyles'
import { Loader, SelectPicker } from 'rsuite'
import { useQuery } from '@tanstack/react-query'
import { fetchAllLayers, fetchAllRotationGroups } from 'api/layers'

export function Layers() {
  const [selectedMapName, setSelectedMapName] = useState<string | null>('')
  const [selectedGameMode, setSelectedGameMode] = useState('')

  const {
    isFetched,
    data: allLayersData,
    isLoading,
  } = useQuery(['get-all-layers'], fetchAllLayers, {
    refetchOnMount: false,
  })

  const mapNames = mapNamesList.map((map) => {
    return { value: map, label: map }
  })

  const gameModes = gameModesList.map((gamemode) => {
    return { value: gamemode, label: gamemode }
  })

  const handleChangeMapName = (selectedMapName: any) => {
    setSelectedMapName(selectedMapName)
  }

  const handleChangeGameMode = (selectedGameMode: any) => {
    setSelectedGameMode(selectedGameMode)
  }

  return (
    <div className={styles.wrapper}>
      {!allLayersData ? (
        <Loader size="md" content="загрузка..." />
      ) : (
        <>
          <div className={styles.actionsWrapper}>
            <SelectPicker
              className={styles.select}
              data={mapNames}
              value={selectedMapName}
              block
              placeholder="Выбрать карту"
              onChange={handleChangeMapName}
              searchable={false}
            />
            <SelectPicker
              className={styles.select}
              data={gameModes}
              value={selectedGameMode}
              block
              placeholder="Выбрать режим"
              onChange={handleChangeGameMode}
              searchable={false}
            />
          </div>
          <Maps
            allLayersData={allLayersData}
            selectedMap={selectedMapName}
            selectedMode={selectedGameMode}
          />
        </>
      )}
    </div>
  )
}
