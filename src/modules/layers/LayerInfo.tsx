import React, { useEffect, useState } from 'react'
import styles from './LayerInfo.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { changeCurrentLayer, changeNextLayer } from 'api/layers'

interface Props {
  layer: any
}

export function LayerInfo({ layer }: Props) {
  const queryClient = useQueryClient()

  const [confirmCurrent, setConfirmCurrent] = useState(false)
  const [confirmNext, setConfirmNext] = useState(false)
  const [layerImg, setLayerImg] = useState(null)
  const [team1Img, setTeam1Img] = useState(null)
  const [team2Img, setTeam2Img] = useState(null)

  useEffect(() => {
    const getImg = async () => {
      const { default: layerImg } = await import(
        `assets/img/maps/full_size/${layer.rawName}.jpg`
      )
      setLayerImg(layerImg)
      const { default: team1Img } = await import(
        `assets/img/flags/flag_${team1}.png`
      )
      setTeam1Img(team1Img)
      const { default: team2Img } = await import(
        `assets/img/flags/flag_${team2}.png`
      )
      setTeam2Img(team2Img)
    }
    getImg()
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
  }

  const handleNextMapButton = () => {
    setConfirmCurrent(false)
    setConfirmNext(true)
  }

  const handleNextMapAction = () => {
    changeNextLayerMutation.mutate()
  }

  let team1: any, team2: any
  switch (layer.team1.name) {
    case 'Canadian Army':
      team1 = 'CAF'
      break
    case 'British Army':
      team1 = 'GB'
      break
    case 'Insurgent Forces':
      team1 = 'INS'
      break
    case 'Irregular Militia Forces':
      team1 = 'MIL'
      break
    case 'Russian Ground Forces':
      team1 = 'RUS'
      break
    case 'United States Army':
      team1 = 'USA'
      break
    case 'United States Marine Corps':
      team1 = 'USMC'
      break
    case 'Middle Eastern Alliance':
      team1 = 'MEA'
      break
    case 'Australian Defence Force':
      team1 = 'AUS'
      break
    default:
      team1 = '---'
      break
  }
  switch (layer.team2.name) {
    case 'Canadian Army':
      team2 = 'CAF'
      break
    case 'British Army':
      team2 = 'GB'
      break
    case 'Insurgent Forces':
      team2 = 'INS'
      break
    case 'Irregular Militia Forces':
      team2 = 'MIL'
      break
    case 'Russian Ground Forces':
      team2 = 'RUS'
      break
    case 'United States Army':
      team2 = 'USA'
      break
    case 'United States Marine Corps':
      team2 = 'USMC'
      break
    case 'Middle Eastern Alliance':
      team2 = 'MEA'
      break
    case 'Australian Defence Force':
      team2 = 'AUS'
      break
    default:
      team2 = '---'
      break
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.vehicles}>
        {layer.team1.vehicles.map(
          (v: {
            respawnTime: any
            delay: any
            icon: string
            count: any
            type: any
          }) => (
            <div className={styles.vehicleRow}>
              <img src={require(`assets/img/veh/${v.icon}.png`)} alt="" />
              <span>{v.type}</span>
              <span>{v.delay === 0 ? '' : v.delay + ' мин'}</span>
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
          <span className={styles.name}>{layer.Name}</span>
        </div>

        <div className={styles.info}>
          <div className={styles.upper}>
            <div className={styles.flagWrapper}>
              <img className={styles.flag} src={`${team1Img}`} alt="" />
              <span className={styles.team}>{layer.team1.tickets}</span>
            </div>
            <div className={styles.lighting}>
              <span>{layer.mapSize}</span>
              <span>{layer.lighting}</span>
            </div>
            <div className={styles.flagWrapper}>
              <span className={styles.team}>{layer.team2.tickets}</span>
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
                Cменить текущую карту на <br /> {layer.Name}?
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
                Cменить следующую карту на <br /> {layer.Name}?
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
        {layer.team2.vehicles.map(
          (v: {
            respawnTime: any
            delay: any
            icon: string

            type: any
          }) => (
            <div className={styles.vehicleRow}>
              <img src={require(`assets/img/veh/${v.icon}.png`)} alt="" />
              <span>{v.type}</span>
              <span>{v.delay === 0 ? '' : v.delay + ' мин'}</span>
            </div>
          )
        )}
      </div>
    </div>
  )
}
