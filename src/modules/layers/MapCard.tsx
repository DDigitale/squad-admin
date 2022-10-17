import React, { useContext, useEffect, useState } from 'react'
import styles from './MapCart.module.scss'
import {
  LayerActionsContext,
  LayerActionsContextType,
} from 'contexts/layer-actions-context'

interface Props {
  layer: any
}

export function MapCard({ layer }: Props) {
  const [layerActions, setLayerActions] = useContext(
    LayerActionsContext
  ) as LayerActionsContextType
  const [cartImg, setCartImg] = useState(null)
  const [team1Img, setTeam1Img] = useState(null)
  const [team2Img, setTeam2Img] = useState(null)

  useEffect(() => {
    const getImg = async () => {
      const { default: cartImg } = await import(
        `assets/img/maps/webp/${layer.rawName}.webp`
      )
      setCartImg(cartImg)
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
      <div
        className={styles.layerImg}
        style={{
          backgroundImage: `url(${cartImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        onClick={() => setLayerActions(layer)}
      >
        <span className={styles.name}>{layer.rawName}</span>
        <div className={styles.info}>
          <img className={styles.flag} src={`${team1Img}`} alt="" />
          <span className={styles.team}>{layer.team1.tickets}</span>
          <span className={styles.team}>{layer.team2.tickets}</span>
          <img className={styles.flag} src={`${team2Img}`} alt="" />
        </div>
      </div>
    </div>
  )
}
