import React, { useEffect, useState } from 'react'
import styles from './ServerInfo.module.scss'

export function ServerInfo() {
  const [layerImg, setLayerImg] = useState(null)

  useEffect(() => {
    const getImg = async () => {
      const { default: layerImg } = await import(
        // `assets/img/kits/${player.role.split('_')[1]}.png`
        `assets/img/bg-layers/Gorodok.png`
      )
      setLayerImg(layerImg)
    }
    getImg()
  }, [])

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${layerImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className={styles.item}>
        <span className={styles.text}>Текущий TPS</span>
        <span className={styles.text}>30</span>
      </div>
      <div className={styles.item}>
        <span className={styles.text}>Игроков на сервере</span>
        <span className={styles.text}>99/100 (+23)</span>
      </div>
      <div className={styles.item}>
        <span className={styles.text}>Текущая карта 1:49:53</span>
        <span className={styles.text}>Gorodok AAS v1</span>
      </div>
    </div>
  )
}
