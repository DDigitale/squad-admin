import React, { useState } from 'react'
import styles from './Layers.module.scss'
import { Maps } from 'modules/layers/Maps'
import { mapNamesList } from 'api/local/mapNamesList'
import Select from 'react-select'
import { gameModesList } from 'api/local/gameModesList'
import { customSelectorStyles } from 'components/forms/SelectorStyles'

interface GameMode {}

export function Layers() {
  const [selectedMapName, setSelectedMapName] = useState<string | null>('')
  const [selectedGameMode, setSelectedGameMode] = useState('')

  const mapNames = mapNamesList.map((map) => {
    return { value: map, label: map }
  })

  const gameModes = gameModesList.map((gamemode) => {
    return { value: gamemode, label: gamemode }
  })

  const handleChangeMapName = (selectedMapName: any) => {
    setSelectedMapName(selectedMapName.value)
  }

  const handleChangeGameMode = (selectedGameMode: any) => {
    setSelectedGameMode(selectedGameMode.value)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.actionsWrapper}>
        <Select
          className={styles.select}
          styles={customSelectorStyles}
          options={mapNames}
          onChange={handleChangeMapName}
          placeholder={'Карта'}
          isClearable
        />
        <Select
          className={styles.select}
          styles={customSelectorStyles}
          options={gameModes}
          onChange={handleChangeGameMode}
          placeholder={'Режим'}
          isClearable
        />
      </div>
      <Maps selectedMap={selectedMapName} selectedMode={selectedGameMode} />
    </div>
  )
}
