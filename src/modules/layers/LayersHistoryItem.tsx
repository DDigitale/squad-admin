import React from 'react'
import styles from './LayersHistoryItem.module.scss'

interface LayersHistoryItemProps {
  layer: any
}

function LayersHistoryItem({ layer }: LayersHistoryItemProps) {
  const time = layer.time

  return (
    <div className={styles.list}>
      <p className={styles.layer}>{layer.layer}</p>
      <p className={styles.time}>
        {new Date(layer.time).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
    </div>
  )
}

export default LayersHistoryItem
