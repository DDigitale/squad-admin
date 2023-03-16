import AddOutlineIcon from '@rsuite/icons/AddOutline'
import CloseOutlineIcon from '@rsuite/icons/CloseOutline'
import PlusIcon from '@rsuite/icons/Plus'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  fetchActivateRotationGroup,
  fetchAddNewRotationGroup,
  fetchAllLayers,
  fetchAllRotationGroups,
  fetchChangeRotationGroup,
  fetchDeactivateRotationGroup,
  fetchDeleteRotationGroup,
  fetchSetNextRotationMapPosition,
} from 'api/layers'
import { gameModesList } from 'api/local/gameModesList'
import { mapNamesList } from 'api/local/mapNamesList'
import {
  LayerActionsContext,
  LayerActionsContextType,
} from 'contexts/layer-actions-context'
import styles from 'pages/admin-route/Rotation/Rotation.module.scss'
import React, { useContext, useEffect, useState } from 'react'
import {
  Button,
  ButtonGroup,
  IconButton,
  Input,
  Popover,
  SelectPicker,
  Whisper,
} from 'rsuite'
import { useRotationStore } from 'store/zuStore'
import { factionConverter } from 'utils/factionConverter'
import { errorToast } from 'utils/toasts'

function Rotation() {
  const [layerActions, setLayerActions] = useContext(
    LayerActionsContext
  ) as LayerActionsContextType
  const layersData = useRotationStore((state) => state.layers)
  const rotationIdFromStore = useRotationStore((state) => state.rotationId)
  const editRotationName = useRotationStore((state) => state.editRotationName)
  const setRotationId = useRotationStore((state) => state.setRotationId)
  const addLayer = useRotationStore((state) => state.addLayer)
  const updateLayers = useRotationStore((state) => state.updateLayers)
  const removeLayer = useRotationStore((state) => state.removeLayer)
  const clearState = useRotationStore((state) => state.clearState)

  const queryClient = useQueryClient()
  const [currentLayer, setCurrentLayer] = useState<any>(null)
  const [layers, setLayers] = useState<any>([])
  const [rotationName, setRotationName] = useState<any>('')
  const [selectedMap, setSelectedMap] = useState<string | null>('')
  const [selectedMode, setSelectedMode] = useState('')
  const [rotationEdit, setRotationEdit] = useState(false)

  const { data: allLayersData } = useQuery(['get-all-layers'], fetchAllLayers, {
    refetchOnMount: false,
  })

  const { data: allRotationGroups } = useQuery(
    ['rotations'],
    fetchAllRotationGroups,
    {
      refetchOnMount: false,
    }
  )

  useEffect(() => {
    setLayers(
      layersData?.map((l: any, index: any) => {
        return { ...l, position: index }
      })
    )
  }, [layersData])

  const sortLayers = (a: any, b: any) => {
    if (a.position > b.position) {
      return 1
    } else {
      return -1
    }
  }

  const layersForBackend = layers?.sort(sortLayers).map((layer: any) => {
    return { mapId: layer.id, position: layer.position + 1 }
  })

  let id: any
  let findedId: any
  let position: any
  let port: any

  const activateRotation = useMutation(
    () => fetchActivateRotationGroup(id, port),
    {
      onSuccess: () => queryClient.invalidateQueries(['rotations']),
    }
  )

  const deactivateRotation = useMutation(
    () => fetchDeactivateRotationGroup(findedId, port),
    {
      onSuccess: () => queryClient.invalidateQueries(['rotations']),
    }
  )

  const setNextRotationMapPosition = useMutation(
    () => fetchSetNextRotationMapPosition(position),
    {
      onSuccess: () => queryClient.invalidateQueries(['rotations']),
    }
  )

  const editRotation = useMutation(
    () =>
      fetchChangeRotationGroup(
        rotationIdFromStore,
        layersForBackend,
        // layers.map((l: any, index: any) => ({
        //   mapId: l.id,
        //   position: index + 1,
        // })),
        rotationName
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['rotations'])
        setRotationName('')
        clearState()
      },
    }
  )

  const saveRotation = useMutation(
    () =>
      fetchAddNewRotationGroup({
        name: rotationName,
        maps: layersForBackend,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['rotations'])
        setRotationName('')
        clearState()
      },
    }
  )

  const deleteRotation = useMutation(
    (rotationId: any) => fetchDeleteRotationGroup(rotationId),
    {
      onSuccess: () => queryClient.invalidateQueries(['rotations']),
    }
  )

  const handleEditRotation = (rotationId: number) => {
    setRotationEdit(true)
    clearState()
    const rotation = allRotationGroups.rotations.filter(
      (l: any) => l.id === rotationId
    )[0]

    const layers = rotation?.maps.map((l: any) => ({
      id: l.map.id,
      name: l.map.name,
      teamOne: l.map.teamOne,
      teamTwo: l.map.teamTwo,
      rawName: l.map.rawName,
    }))
    editRotationName(rotation.name)
    setRotationName(rotation.name)
    setRotationId(rotationId)
    updateLayers(layers)
  }

  const mapNames = mapNamesList.map((map) => {
    return { value: map, label: map }
  })

  const gameModes = gameModesList.map((gamemode) => {
    return { value: gamemode, label: gamemode }
  })

  const handleChangeMapName = (selectedMapName: any) => {
    setSelectedMap(selectedMapName)
  }

  const handleChangeGameMode = (selectedGameMode: any) => {
    setSelectedMode(selectedGameMode)
  }

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

  const editRotationNameHandler = (text: any) => {
    editRotationName(text)
    setRotationName(text)
  }

  const addLayerHandler = (layer: any) => {
    if (layers.find((l: any) => l.id === layer.id)) {
      errorToast(`${layer.rawName} уже есть в списке`)
    } else {
      addLayer(layer)
      return layer
    }
  }

  const removeLayerHandler = (layer: any) => {
    removeLayer(layer)
  }

  function dragStartHandler(e: any, layer: any) {
    setCurrentLayer(layer)
  }

  function dragLeaveHandler(e: any) {}

  function dragEndHandler(e: any) {
    updateLayers(layers)
  }

  function dragOverHandler(e: any) {
    e.preventDefault()
  }

  const dropHandler = (e: any, layer: any) => {
    e.preventDefault()
    setLayers(
      layers.map((l: any) => {
        if (l.id === layer.id) {
          return { ...l, position: currentLayer.position }
        }
        if (l.id === currentLayer.id) {
          return { ...l, position: layer.position }
        }
        return l
      })
    )
  }

  const deactivateActiveRotation = (rotations: any) => {
    findedId = rotations.find((r: any) => r.isActive === true).id
    port = localStorage.getItem('server')
    deactivateRotation.mutate()
  }

  const sortActiveRotationFirst = (active: any) => {
    if (active.isActive === true) {
      return -1
    } else {
      return 1
    }
  }

  return (
    <div className={styles.wrapper}>
      <section className={styles.leftSection}>
        <Button
          onClick={() => deactivateActiveRotation(allRotationGroups.rotations)}
          style={{ marginBottom: '1rem' }}
          color="green"
          disabled={
            !allRotationGroups?.rotations.find((r: any) => r.isActive === true)
          }
        >
          Деактивировать активные ротации
        </Button>
        <div className={styles.addedLayers}>
          {allRotationGroups?.rotations
            .sort(sortActiveRotationFirst)
            .map((r: any) => (
              <ButtonGroup key={r.id} className={styles.buttonGroup} justified>
                <IconButton
                  onClick={() => {
                    confirm(`Удалить ротацию ${r.id} ${r.name}?`) &&
                      deleteRotation.mutate(r.id)
                  }}
                  icon={<CloseOutlineIcon />}
                  style={{ maxWidth: 40 }}
                />
                <Whisper
                  placement="bottomStart"
                  trigger="hover"
                  enterable={r.isActive === true}
                  speaker={
                    <Popover title={r.name}>
                      {r.isActive ? (
                        <div
                          style={{
                            display: 'flex',
                            gap: '0.3rem',
                            flexDirection: 'column',
                          }}
                        >
                          <span>Активна</span>
                          {r.maps.map((m: any) => (
                            <div
                              style={{
                                color:
                                  allRotationGroups.nextMapPosition ===
                                  m.map.rawName
                                    ? 'yellowgreen'
                                    : '',
                              }}
                              className={styles.mapInActiveRotationRow}
                              onClick={() => {
                                console.log(m.position)
                                position = m.position
                                setNextRotationMapPosition.mutate()
                              }}
                              title={'выбрать следующую карту в ротации'}
                            >
                              <span style={{ width: '3rem' }}>
                                {factionConverter(m.map.teamOne.faction)}
                              </span>
                              <span style={{ width: '3rem' }}>
                                {factionConverter(m.map.teamTwo.faction)}
                              </span>
                              <span>{m.map.name}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div>
                          {r.maps.map((m: any) => (
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              <span style={{ width: '2rem' }}>
                                {factionConverter(m.map.teamOne.faction)}
                              </span>
                              <span style={{ width: '2rem' }}>
                                {factionConverter(m.map.teamTwo.faction)}
                              </span>
                              <span>{m.map.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </Popover>
                  }
                >
                  <Button
                    onClick={() => handleEditRotation(r.id)}
                    appearance="default"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                    }}
                    size="md"
                  >
                    <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                      {r.name}
                    </span>
                  </Button>
                </Whisper>
                {r.isActive ? (
                  <Button style={{ color: 'yellowgreen' }}>Активна</Button>
                ) : (
                  <Button
                    style={{ maxWidth: '10rem' }}
                    onClick={() => {
                      id = r.id
                      port = localStorage.getItem('server')
                      confirm(`Установить ротацию ${r.name}`) &&
                        activateRotation.mutate()
                    }}
                    disabled={allRotationGroups?.rotations.find(
                      (r: any) => r.isActive === true
                    )}
                  >
                    Активировать
                  </Button>
                )}
              </ButtonGroup>
            ))}
        </div>
      </section>
      <section className={styles.centerSection}>
        <Input
          placeholder="Имя ротации"
          minLength={5}
          value={rotationName}
          onChange={(e: any) => editRotationNameHandler(e)}
          style={{ marginBottom: '0.5rem' }}
        />
        <div className={styles.addedLayers}>
          {layers?.sort(sortLayers).map((layer: any, index: any) => (
            <ButtonGroup
              className={styles.buttonGroup}
              justified
              key={layer.id}
              draggable={true}
              onDragStart={(e: any) => dragStartHandler(e, layer)}
              onDragLeave={(e: any) => dragLeaveHandler(e)}
              onDragEnd={(e: any) => dragEndHandler(e)}
              onDragOver={(e: any) => dragOverHandler(e)}
              onDrop={(e: any) => dropHandler(e, layer)}
            >
              <Button
                onClick={() => setLayerActions(layer)}
                appearance="default"
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  gap: '0.5rem',
                }}
                size="md"
              >
                <span style={{ width: 36 }}>
                  {factionConverter(layer.teamOne?.faction)}
                </span>
                <span style={{ width: 36 }}>
                  {factionConverter(layer.teamTwo?.faction)}
                </span>
                <span
                  id="rawName"
                  style={{ fontWeight: 'bold', fontSize: '1.1rem' }}
                >
                  {layer.rawName}
                </span>
              </Button>
              <IconButton
                onClick={() => removeLayerHandler(layer)}
                icon={<CloseOutlineIcon />}
                style={{ maxWidth: 40 }}
              />
            </ButtonGroup>
          ))}
        </div>
        <div className={styles.saveRotationBtn}>
          {rotationEdit ? (
            <IconButton
              disabled={rotationName.length < 5 || layers.length < 5}
              onClick={() => editRotation.mutate()}
              icon={<PlusIcon />}
            >
              Сохранить изменения
            </IconButton>
          ) : (
            <IconButton
              disabled={rotationName.length < 5 || layers.length < 5}
              onClick={() => saveRotation.mutate()}
              // onClick={() => editRotation.mutate()}
              icon={<PlusIcon />}
            >
              Сохранить ротацию
            </IconButton>
          )}
          <Button
            onClick={() => {
              clearState()
              setRotationName('')
              setRotationEdit(false)
              setRotationId(0)
            }}
          >
            Очистить редактор
          </Button>
        </div>
      </section>
      <section>
        <div className={styles.select}>
          <SelectPicker
            style={{ minWidth: '50%' }}
            data={mapNames}
            value={selectedMap}
            block
            placeholder="Выбрать карту"
            onChange={handleChangeMapName}
            searchable={false}
          />
          <SelectPicker
            style={{ minWidth: '50%' }}
            data={gameModes}
            value={selectedMode}
            block
            placeholder="Выбрать режим"
            onChange={handleChangeGameMode}
            searchable={false}
          />
        </div>
        {selectedMap || selectedMode
          ? filteredData?.map((layer: any) => (
              <ButtonGroup
                key={layer.id}
                className={styles.buttonGroup}
                justified
                style={{
                  display: layers.find((l: any) => l.id === layer.id)
                    ? 'none'
                    : '',
                }}
              >
                <IconButton
                  onClick={() => addLayerHandler(layer)}
                  icon={<AddOutlineIcon />}
                  style={{ maxWidth: 40 }}
                />
                <Button
                  onClick={() => setLayerActions(layer)}
                  appearance="default"
                  style={{
                    display: 'flex',
                    justifyContent: 'start',
                    gap: '0.5rem',
                  }}
                  size="md"
                >
                  <span style={{ width: 36 }}>
                    {factionConverter(layer.teamOne.faction)}
                  </span>
                  <span style={{ width: 36 }}>
                    {factionConverter(layer.teamTwo.faction)}
                  </span>
                  <span
                    id="rawName"
                    style={{ fontWeight: 'bold', fontSize: '1.1rem' }}
                  >
                    {layer.rawName}
                  </span>
                  <span
                    style={{
                      marginLeft: 'auto',
                      fontStyle: 'italic',
                      fontSize: '1.25rem',
                    }}
                  >
                    {layer.numOfGames}
                  </span>
                </Button>
              </ButtonGroup>
            ))
          : null}
      </section>
    </div>
  )
}

export default Rotation
