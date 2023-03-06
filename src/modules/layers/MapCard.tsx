import React, { useContext, useEffect, useState } from 'react'
import { factionConverter } from 'utils/factionConverter'
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

  // переделать фон на картинки как в статусе сервера

  let team1: any, team2: any

  team1 = factionConverter(layer.teamOne.faction)
  team2 = factionConverter(layer.teamTwo.faction)

  useEffect(() => {
    const getCartImg = async () => {
      try {
        const { default: cartImg } = await import(
          `../../assets/img/bg-layers-mini/${layer.rawName.split('_')[0]}.png`
        )
        setCartImg(cartImg)
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

    getCartImg()
    getTeam1Img()
    getTeam2Img()
  }, [layer])

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
          <img className={styles.flag} src={`${team2Img}`} alt="" />
          <span>{layer.numOfGames}</span>
        </div>
      </div>
    </div>
  )
}
