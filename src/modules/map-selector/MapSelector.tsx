import React, { useEffect, useState } from 'react'
import styles from './MapSelector.module.scss'
import backgroundImage from 'assets/img/bg-layers/Fallujah.png'

export function MapSelector() {
  const [layerImg, setLayerImg] = useState(null)

  useEffect(() => {
    const getImg = async () => {
      const { default: layerImg } = await import(
        // `assets/img/kits/${player.role.split('_')[1]}.png`
        `assets/img/bg-layers/Sumari.png`
      )
      setLayerImg(layerImg)
    }
    getImg()
  }, [])

  return (
    <>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${layerImg})` }}
      >
        <p className={styles.title}>Следующая карта</p>
        <p className={styles.nextMap}>Sumari Bala RAAS v2</p>
      </div>
    </>
  )
}
