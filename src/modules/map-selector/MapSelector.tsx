import React, { useContext, useEffect, useState } from 'react'
import styles from './MapSelector.module.scss'
import { LayersContext, LayersContextType } from 'contexts/layers-context'

interface Props {
  nextLayer: any
}

export function MapSelector({ nextLayer }: Props) {
  const [layerModal, setLayerModal] = useContext(
    LayersContext
  ) as LayersContextType

  const [layerImg, setLayerImg] = useState(null)

  useEffect(() => {
    const getImg = async () => {
      const mapName = nextLayer.split(' ')[0].startsWith('Fool')
        ? 'Fool'
        : nextLayer.split(' ')[0]
      const { default: layerImg } = await import(
        `assets/img/bg-layers/${mapName}.png`
      )
      setLayerImg(layerImg)
    }
    getImg()
  }, [])

  return (
    <>
      <div
        className={styles.wrapper}
        onClick={() => setLayerModal(!layerModal)}
      >
        <p className={styles.title}>Следующая карта</p>
        <p className={styles.nextMap}>{nextLayer}</p>
        <div
          className={styles.background}
          style={{
            backgroundImage: `url(${layerImg})`,
          }}
        />
      </div>
    </>
  )
}
