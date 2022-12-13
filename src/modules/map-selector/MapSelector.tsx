import React, { useContext, useEffect, useState } from 'react'
import styles from './MapSelector.module.scss'
import { FcInfo } from 'react-icons/fc'
import { FcList } from 'react-icons/fc'
import { LayersContext, LayersContextType } from 'contexts/layers-context'
import {
  LayerActionsContext,
  LayerActionsContextType,
} from 'contexts/layer-actions-context'
import { mapsNormalized } from 'api/local/mapsNormalized'

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
      const mapName = nextLayer?.split(' ')[0].startsWith('Fool')
        ? 'Fool'
        : nextLayer?.split(' ')[0]
      const { default: layerImg } = await import(
        `assets/img/bg-layers/${mapName}.png`
      )
      setLayerImg(layerImg)
    }
    getImg()

    const layer = mapsNormalized.find(
      (map: any) =>
        map.rawName.replaceAll('_', '') === nextLayer.replaceAll(' ', '')
    )

    setLayerData(layer)

    // console.log('REPLACE ', nextLayer.replaceAll(' ', ''))
    // console.log('NEXT: ', nextLayer)
    // console.log('LAYER: ', layer)
  }, [nextLayer])

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.title}>Следующая карта</p>
        <p className={styles.nextMap}>{nextLayer}</p>
        <div
          className={styles.background}
          style={{
            backgroundImage: `url(${layerImg})`,
          }}
        />
        <div className={styles.buttons}>
          <FcList
            className={styles.button}
            onClick={() => setLayersMenu(!layersMenu)}
          />
          <FcInfo
            className={styles.button}
            onClick={() => setLayerModal(layerData)}
          />
        </div>
      </div>
    </>
  )
}
