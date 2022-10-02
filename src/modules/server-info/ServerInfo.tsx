import React, { useEffect, useState } from 'react'
import styles from './ServerInfo.module.scss'

interface Props {
  server: any
}

export function ServerInfo({ server }: Props) {
  const [layerImg, setLayerImg] = useState('')

  useEffect(() => {
    const getImg = async () => {
      const mapName = server?.currentLayer?.split(' ')[0].startsWith('Fool')
        ? 'Fool'
        : server?.currentLayer?.split(' ')[0]

      const { default: layerImg } = await import(
        `assets/img/bg-layers/${mapName}.png`
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
    <div className={styles.wrapper}>
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(${layerImg})`,
        }}
      />
      <div className={styles.item}>
        <span className={styles.text}>Текущий TPS</span>
        <span className={styles.text}>{server?.serverTickRate}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.text}>Игроков на сервере</span>
        <span className={styles.text}>
          {server?.playerCount}/{server?.maxPlayers} (+{server?.publicQueue})
        </span>
      </div>
      <div className={styles.item}>
        <span className={styles.text}>
          Время игры {formattedTime(server?.playTime)} мин
        </span>
        <span className={styles.text}>{server?.currentLayer}</span>
      </div>
    </div>
  )
}
