import React, { useEffect, useState } from 'react'
import styles from './MapCart.module.scss'

interface Props {
  layer: any
}

export function MapCart({ layer }: Props) {
  const [cartImg, setCartImg] = useState(null)

  useEffect(() => {
    const getImg = async () => {
      const { default: cartImg } = await import(
        `assets/img/maps/webp/${layer.rawName}.webp`
      )
      setCartImg(cartImg)
    }
    getImg()
  }, [layer])

  return (
    <div className={styles.wrapper}>
      <span className={styles.name}>{layer.rawName}</span>
      <img className={styles.image} src={`${cartImg}`} alt="" />
      <span className={styles.team}>{layer.team1.name}</span>
      <span className={styles.team}>{layer.team2.name}</span>
    </div>
  )
}
