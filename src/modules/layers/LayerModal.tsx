import React, { useContext, useRef, useState } from 'react'
import styles from 'modules/layers/LayerModal.module.scss'
import {
  LayerActionsContext,
  LayerActionsContextType,
} from 'contexts/layer-actions-context'
import { LayerInfo } from 'modules/layers/LayerInfo'
import { Card, Modal } from 'components'

interface Props {
  onClose: () => void
}

export function LayerModal({ onClose }: Props) {
  const [layerModal, setLayerModal] = useContext(
    LayerActionsContext
  ) as LayerActionsContextType

  const infoRef = useRef<HTMLDivElement | null>(null)

  return (
    <Modal onClose={onClose} innerElRefs={[infoRef]}>
      <Card ref={infoRef}>
        <LayerInfo layer={layerModal} />
      </Card>
    </Modal>
  )
}
