import React from 'react'
import styles from './Statistics.module.scss'
import { Loader } from 'rsuite'

interface Props {
  playerSteamId: any
  data: any
  isLoading: boolean
  isSuccess: boolean
}

export function Statistics({ data, isSuccess, isLoading }: Props) {
  const reversedStatsByDate = [...data.statsByDate].reverse()

  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <Loader size="md" center={true} content="загрузка..." vertical />
      )}
      {isSuccess && (
        <div>
          <div className={styles.statRow}>
            <span className={styles.kd}>{data.info[0].kd} </span>
            <span className={styles.mtext}>
              {data.info[0].kills}
              <span className={styles.smtext}>убийств</span>
            </span>
            <span className={styles.mtext}>
              {data.info[0].deaths}
              <span className={styles.smtext}>смертей</span>
            </span>
            <span className={styles.mtext}>
              {data.info[0].wounds}
              <span className={styles.smtext}>ранений</span>
            </span>
            <span className={styles.mtext}>
              {data.info[0].revives}
              <span className={styles.smtext}>поднятий</span>
            </span>
            <span className={styles.mtext}>
              {data.info[0].teamkills}
              <span className={styles.smtext}>тк</span>
            </span>
            <span className={styles.mtext}>
              {data.info[0].matches}
              <span className={styles.smtext}>матчей</span>
            </span>
            <span className={styles.mtext}>
              {data.statsByDate.length}
              <span className={styles.smtext}>дней</span>
            </span>
          </div>
          <div>
            {reversedStatsByDate.map((stbd: any) => (
              <div key={stbd.date} className={styles.row}>
                <span className={styles.time}>
                  {new Date(stbd.date).toLocaleDateString('ru-RU')}
                </span>
                <span className={styles.mtext}>
                  {stbd.total_kills}
                  <span className={styles.smtext}>убийств</span>
                </span>
                <span className={styles.mtext}>
                  {stbd.total_deaths}
                  <span className={styles.smtext}>смертей</span>
                </span>
                <span className={styles.mtext}>
                  {stbd.total_wounds}
                  <span className={styles.smtext}>ранений</span>
                </span>
                <span className={styles.mtext}>
                  {stbd.total_revives}
                  <span className={styles.smtext}>поднятий</span>
                </span>
                <span className={styles.mtext}>
                  {stbd.total_teamkills}
                  <span className={styles.smtext}>тк</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
