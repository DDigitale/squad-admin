import React, { useContext, useEffect, useState } from 'react'
import { factionConverter } from 'utils/factionConverter'
import styles from 'pages/admin-route/Rotation/Rotation.module.scss'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  fetchAllLayers,
  fetchAddNewRotationGroup,
  fetchAllRotationGroups,
  fetchDeleteRotationGroup,
  fetchChangeRotationGroup,
} from 'api/layers'
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  IconButton,
  Input,
  InputPicker,
  SelectPicker,
} from 'rsuite'
import PlusIcon from '@rsuite/icons/Plus'
import { mapNamesList } from 'api/local/mapNamesList'
import { gameModesList } from 'api/local/gameModesList'
import AddOutlineIcon from '@rsuite/icons/AddOutline'
import CloseOutlineIcon from '@rsuite/icons/CloseOutline'
import { useRotationStore } from 'store/zuStore'
import { errorToast } from 'utils/toasts'
import {
  LayerActionsContext,
  LayerActionsContextType,
} from 'contexts/layer-actions-context'

function Rotation() {
  const [layerActions, setLayerActions] = useContext(
    LayerActionsContext
  ) as LayerActionsContextType
  const layersData = useRotationStore((state) => state.layers)
  const editRotationName = useRotationStore((state) => state.editRotationName)
  const addLayer = useRotationStore((state) => state.addLayer)
  const updateLayers = useRotationStore((state) => state.updateLayers)
  const removeLayer = useRotationStore((state) => state.removeLayer)

  const queryClient = useQueryClient()
  const [currentLayer, setCurrentLayer] = useState<any>(null)
  const [layers, setLayers] = useState<any>([])
  const [rotationName, setRotationName] = useState<any>('')

  const [selectedMap, setSelectedMap] = useState<string | null>('')
  const [selectedMode, setSelectedMode] = useState('')

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

  //activate-rotation-group
  //set-next-rotation-map-position
  //change-rotation-group изменение конкретной ротации

  const layersForBackend = layers.sort(sortLayers).map((layer: any) => {
    return { mapId: layer.id, position: layer.position }
  })

  // отправлять запрос на бекенд по соответствующему серверу порту 8000 или 8001
  const activateRotation = useMutation(
    (rotationId: any) => fetchChangeRotationGroup(rotationId),
    {
      onSuccess: () => queryClient.invalidateQueries(['rotations']),
    }
  )

  // rotationGroupId, массив {map, positions}, name
  // брать данные из стейта
  const changeRotation = useMutation(
    (rotationId: any) => fetchChangeRotationGroup(rotationId),
    {
      onSuccess: () => queryClient.invalidateQueries(['rotations']),
    }
  )

  const saveRotation = useMutation(
    () =>
      fetchAddNewRotationGroup({
        name: rotationName,
        maps: layersForBackend,
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['rotations']),
    }
  )

  const deleteRotation = useMutation(
    (rotationId: any) => fetchDeleteRotationGroup(rotationId),
    {
      onSuccess: () => queryClient.invalidateQueries(['rotations']),
    }
  )

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

  return (
    <div className={styles.wrapper}>
      <section className={styles.leftSection}>
        <div className={styles.addedLayers}>
          <span style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            Список ротаций
          </span>
          {allRotationGroups?.map((r: any) => (
            <ButtonGroup key={r.id} className={styles.buttonGroup} justified>
              <IconButton
                onClick={() => {
                  confirm(`Удалить ротацию ${r.id} ${r.name}?`) &&
                    deleteRotation.mutate(r.id)
                }}
                icon={<CloseOutlineIcon />}
                style={{ maxWidth: 40 }}
              />
              <Button
                onClick={() => changeRotation.mutate(r.id)}
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
              {r.isActive ? (
                <Button color="green">
                  Активна на: ${r.serverID.shortName}
                </Button>
              ) : (
                <>
                  <Button style={{ maxWidth: 60 }}>ОС-1</Button>
                  <Button style={{ maxWidth: 60 }}>ОС-2</Button>
                </>
              )}
            </ButtonGroup>
          ))}
        </div>
      </section>
      <section className={styles.centerSection}>
        <Input
          placeholder="Имя ротации"
          minLength={5}
          onChange={(e: any) => editRotationNameHandler(e)}
          style={{ marginBottom: '0.5rem' }}
        />
        <div className={styles.addedLayers}>
          {layers.sort(sortLayers).map((layer: any, index: any) => (
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
                {/*<span>idx:{index}</span>*/}
                {/*<span>pos:{layer.position}</span>*/}
                {/*<span>mapid:{layer.id}</span>*/}
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
          <IconButton
            disabled={rotationName.length < 5}
            onClick={() => saveRotation.mutate()}
            icon={<PlusIcon />}
          >
            Сохранить ротацию
          </IconButton>
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
              <ButtonGroup className={styles.buttonGroup} justified>
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
