import React, { useState } from 'react'
import styles from './Layers.module.scss'
import { Maps } from 'modules/layers/Maps'
import { mapNamesList } from 'api/local/mapNamesList'
import Select from 'react-select'
import { gameModesList } from 'api/local/gameModesList'

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

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: '#3c3f41',
      border: 'none',
      height: 50,
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      color: 'rgba(253, 253, 254, 0.65)',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: '1px solid #5e5e5f',
      backgroundColor: state.isSelected
        ? '#939394'
        : '#3c3f41' && state.isFocused
        ? '#2a2a2b'
        : '#3c3f41',
      color: 'rgba(253, 253, 254, 0.65)',
      padding: '0.6rem',
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: '#3c3f41',
    }),
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.actionsWrapper}>
        <Select
          styles={customStyles}
          options={mapNames}
          onChange={handleChangeMapName}
          placeholder={'Карта'}
        />
        <Select
          styles={customStyles}
          options={gameModes}
          onChange={handleChangeGameMode}
          placeholder={'Режим'}
        />
      </div>
      <Maps selectedMap={selectedMapName} selectedMode={selectedGameMode} />
    </div>
  )
}
