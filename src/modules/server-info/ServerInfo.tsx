import React, { useEffect, useRef, useState } from 'react'
import styles from './ServerInfo.module.scss'

interface Props {
  server: any
}

export function ServerInfo({ server }: Props) {
  const [layerImg, setLayerImg] = useState('')

  useEffect(() => {
    const getImg = async () => {
      try {
        const mapName = server?.currentLayer?.split(' ')[0].startsWith('Fool')
          ? 'Fool'
          : server?.currentLayer?.split(' ')[0]

        const { default: layerImg } = await import(
          `../../assets/img/bg-layers/${mapName}.png`
        )

        setLayerImg(layerImg)
      } catch (e) {}
    }
    getImg()
  }, [server])

  const formattedTime = (time: number) => {
    return Math.floor(time / 60)
  }

  return (
    <div className={styles.wrapper}>
      {layerImg ? (
        <div
          className={styles.background}
          style={{
            backgroundImage: `url(${layerImg})`,
          }}
        />
      ) : (
        <div
          className={styles.background}
          style={{
            backgroundColor: '#3c3f41',
          }}
        />
      )}

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
        <span className={styles.text} style={{}}>
          Время игры {formattedTime(server?.playTime)} мин
        </span>
        <span className={styles.text}>{server?.currentLayer}</span>
      </div>
    </div>
  )
}
