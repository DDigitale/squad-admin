import React, { useEffect, useState } from 'react'
import styles from './LayersHistoryItem.module.scss'
import { factionConverter } from 'utils/factionConverter'
import { format, isToday, isYesterday } from 'date-fns'

interface LayersHistoryItemProps {
  layer: any
}

function LayersHistoryItem({ layer }: LayersHistoryItemProps) {
  const [cartImg, setCartImg] = useState(null)
  const [team1Img, setTeam1Img] = useState(null)
  const [team2Img, setTeam2Img] = useState(null)

  let team1: any, team2: any

  team1 = factionConverter(layer.layer?.teamOne?.faction)
  team2 = factionConverter(layer.layer?.teamTwo?.faction)

  useEffect(() => {
    const getCartImg = async () => {
      try {
        const { default: cartImg } = await import(
          `../../assets/img/bg-layers-mini/${
            layer.layer?.rawName?.split('_')[0]
          }.png`
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

  const prefix = isToday(new Date(layer.time))
    ? 'Сегодня, '
    : isYesterday(new Date(layer.time))
    ? 'Вчера, '
    : ''

  const formattedTime = prefix + format(new Date(layer.time), 'HH:mm')

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.layerImg}
        style={
          cartImg
            ? {
                backgroundImage: `url(${cartImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }
            : { backgroundColor: '#3c3f41' }
        }
      >
        <span className={styles.name}>{layer.layer.name}</span>
        <div className={styles.info}>
          <img className={styles.flag} src={`${team1Img}`} alt="" />
          <img className={styles.flag} src={`${team2Img}`} alt="" />
          <span>{formattedTime}</span>
        </div>
      </div>
    </div>
  )
}

export default LayersHistoryItem
