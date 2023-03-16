import React, { useContext, useEffect, useState } from 'react'
import styles from './MapSelector.module.scss'
import { FcInfo } from 'react-icons/fc'
import { FcList } from 'react-icons/fc'
import { LayersContext, LayersContextType } from 'contexts/layers-context'
import {
  LayerActionsContext,
  LayerActionsContextType,
} from 'contexts/layer-actions-context'

interface Props {
  nextLayer: any
}

export function MapSelector({ nextLayer }: Props) {
  const [layersMenu, setLayersMenu] = useContext(
    LayersContext
  ) as LayersContextType
  const [layerModal, setLayerModal] = useContext(
    LayerActionsContext
  ) as LayerActionsContextType

  const [layerImg, setLayerImg] = useState(null)
  const [layerData, setLayerData] = useState<any>({})

  useEffect(() => {
    const getImg = async () => {
      try {
        const mapName = nextLayer?.split(' ')[0].startsWith('Fool')
          ? 'Fool'
          : nextLayer?.split(' ')[0]
        const { default: layerImg } = await import(
          `../../assets/img/bg-layers/${mapName}.png`
        )
        setLayerImg(layerImg)
      } catch (e) {}
    }
    getImg()
  }, [nextLayer])

  return (
    <div className={styles.wrapper} onClick={() => setLayersMenu(!layersMenu)}>
      <p className={styles.title}>Следующая карта</p>
      <p className={styles.nextMap}>{nextLayer}</p>
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
    </div>
  )
}
