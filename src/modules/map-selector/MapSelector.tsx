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
      const { default: layerImg } = await import(
        // `assets/img/kits/${player.role.split('_')[1]}.png`
        `assets/img/bg-layers/${nextLayer.split(' ')[0]}.png`
      )
      setLayerImg(layerImg)
    }
    getImg()
  }, [])

  return (
    <>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `url(${layerImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        onClick={() => setLayerModal(!layerModal)}
      >
        <p className={styles.title}>Следующая карта</p>
        <p className={styles.nextMap}>{nextLayer}</p>
      </div>
    </>
  )
}
