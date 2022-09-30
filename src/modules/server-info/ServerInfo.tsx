import React, { useEffect, useState } from 'react'
import styles from './ServerInfo.module.scss'

interface Props {
  server: any
}

export function ServerInfo({ server }: Props) {
  const [layerImg, setLayerImg] = useState(null)

  useEffect(() => {
    const getImg = async () => {
      const { default: layerImg } = await import(
        `assets/img/bg-layers/${server.currentLayer.split(' ')[0]}.png`
      )
      setLayerImg(layerImg)
    }
    getImg()
  }, [])

  const formattedTime = (time: number) => {
    const m = Math.floor(time / 60)
    return m
  }

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
        <span className={styles.text}>{`${server.serverTickRate} ${
          server.maxTickRate === null ? '' : `(${server.maxTickRate})`
        }`}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.text}>Игроков на сервере</span>
        <span className={styles.text}>
          {server.playerCount}/{server.maxPlayers} (+{server.publicQueue})
        </span>
      </div>
      <div className={styles.item}>
        <span className={styles.text}>
          Время игры {formattedTime(server.playTime)} мин
        </span>
        <span className={styles.text}>{server.currentLayer}</span>
      </div>
    </div>
  )
}
