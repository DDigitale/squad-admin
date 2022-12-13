import React from 'react'
import styles from './LayersHistory.module.scss'
import { useQuery } from '@tanstack/react-query'
import { fetchLayersHistory } from 'api/layers'
import { Card } from 'components'
import LayersHistoryItem from 'modules/layers/LayersHistoryItem'

function LayersHistory() {
  const { data: layersHistory } = useQuery(
    ['layers-history'],
    fetchLayersHistory
  )

  return (
    <Card className={styles.historyCard}>
      {layersHistory?.content?.map((layer: any) => (
        <LayersHistoryItem key={layer.id} layer={layer} />
      ))}
    </Card>
  )
}

export default LayersHistory
