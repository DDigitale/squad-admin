import React, { useEffect, useState } from 'react'
import styles from './LayerInfo.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { changeCurrentLayer, changeNextLayer } from 'api/layers'
import { factionConverter } from 'utils/factionConverter'

interface Props {
  layer: any
  onClose: () => void
}

export function LayerInfo({ layer, onClose }: Props) {
  const queryClient = useQueryClient()

  const [confirmCurrent, setConfirmCurrent] = useState(false)
  const [confirmNext, setConfirmNext] = useState(false)
  const [layerImg, setLayerImg] = useState(null)
  const [team1Img, setTeam1Img] = useState(null)
  const [team2Img, setTeam2Img] = useState(null)

  let team1: any, team2: any

  team1 = factionConverter(layer.teamOne.faction)
  team2 = factionConverter(layer.teamTwo.faction)

  useEffect(() => {
    const getImg = async () => {
      try {
        const { default: layerImg } = await import(
          `../../assets/img/maps/full_size/${layer.rawName}.jpg`
        )
        setLayerImg(layerImg)
      } catch (e) {}
    }

    const getTeam1Img = async () => {
      try {
        const { default: team1Img } = await import(
          `../../assets/img/flags/flag_${team1}.png`
        )
        setTeam1Img(team1Img)
      } catch (e) {}
    }

    const getTeam2Img = async () => {
      try {
        const { default: team2Img } = await import(
          `../../assets/img/flags/flag_${team2}.png`
        )
        setTeam2Img(team2Img)
      } catch (e) {}
    }

    getImg()
    getTeam1Img()
    getTeam2Img()
  }, [layer])

  const changeCurrentLayerMutation = useMutation(
    () => changeCurrentLayer(layer.rawName),
    {
      onSuccess: () => queryClient.invalidateQueries(['layers']),
    }
  )

  const changeNextLayerMutation = useMutation(
    () => changeNextLayer(layer.rawName),
    {
      onSuccess: () => queryClient.invalidateQueries(['layers']),
    }
  )

  const handleCurrentMapButton = () => {
    setConfirmCurrent(true)
    setConfirmNext(false)
  }

  const handleCurrentMapAction = () => {
    changeCurrentLayerMutation.mutate()
    onClose()
  }

  const handleNextMapButton = () => {
    setConfirmCurrent(false)
    setConfirmNext(true)
  }

  const handleNextMapAction = () => {
    changeNextLayerMutation.mutate()
    onClose()
  }

  function getImageUrl(name: any) {
    return new URL(`../../assets/img/veh/${name}.png`, import.meta.url).href
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.vehicles}>
        {layer.teamOne.vehicles.map(
          (v: {
            respawnTime: any
            delay: any
            icon: string
            type: any
            vehicle: any
          }) => (
            <div className={styles.vehicleRow} key={v.vehicle.id}>
              <img src={getImageUrl(v.vehicle.icon)} alt="" />
              <span>{v.vehicle.type}</span>
              <span>
                {v.vehicle.delay === 0 ? '' : v.vehicle.delay + ' мин'}
              </span>
            </div>
          )
        )}
      </div>
      <div
        className={styles.layerImg}
        style={{
          backgroundImage: `url(${layerImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div>
          <span className={styles.name}>{layer.name}</span>
        </div>

        <div className={styles.info}>
          <div className={styles.upper}>
            <div className={styles.flagWrapper}>
              <img className={styles.flag} src={`${team1Img}`} alt="" />
              <span className={styles.team}>{layer.teamOne.tickets}</span>
            </div>
            <div className={styles.lighting}>
              <span>{layer.mapSize}</span>
              <span>{layer.lighting}</span>
            </div>
            <div className={styles.flagWrapper}>
              <span className={styles.team}>{layer.teamTwo.tickets}</span>
              <img className={styles.flag} src={`${team2Img}`} alt="" />
            </div>
          </div>
          <div className={styles.down}>
            <button className={styles.button} onClick={handleCurrentMapButton}>
              Установить текущей
            </button>
            <button className={styles.button} onClick={handleNextMapButton}>
              Установить следующей
            </button>
          </div>
          {confirmCurrent && (
            <div className={styles.confirm}>
              <span>
                Cменить текущую карту на <br /> {layer.name}?
              </span>
              <button
                className={styles.confBtn}
                onClick={handleCurrentMapAction}
              >
                ДА
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setConfirmCurrent(false)}
              >
                НЕТ
              </button>
            </div>
          )}
          {confirmNext && (
            <div className={styles.confirm}>
              <span>
                Cменить следующую карту на <br /> {layer.name}?
              </span>
              <button className={styles.confBtn} onClick={handleNextMapAction}>
                ДА
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setConfirmNext(false)}
              >
                НЕТ
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={styles.vehicles}>
        {layer.teamTwo.vehicles.map(
          (v: {
            respawnTime: any
            delay: any
            icon: string
            vehicle: any
            type: any
          }) => (
            <div className={styles.vehicleRow} key={v.vehicle.id}>
              <img src={getImageUrl(v.vehicle.icon)} alt="" />
              <span>{v.vehicle.type}</span>
              <span>
                {v.vehicle.delay === 0 ? '' : v.vehicle.delay + ' мин'}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  )
}
