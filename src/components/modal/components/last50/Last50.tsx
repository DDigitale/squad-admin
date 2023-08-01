import React, { useContext } from 'react'
import styles from './Last50.module.scss'
import { Loader } from 'rsuite'
import { dateTimeFormat } from 'utils/dateFormatter'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { Link } from 'react-router-dom'

interface Props {
  data: any
  isLoading: boolean
  isSuccess: boolean
}

export function Last50({ data, isSuccess, isLoading }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  console.log(data)
  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <Loader size="md" center={true} content="загрузка..." vertical />
      )}
      {isSuccess && (
        <div>
          {data.map((last: any, index: any) => (
            <div
              key={index}
              className={styles.row}
              style={{
                backgroundColor: last.tk === 'true' ? 'rgba(255,0,0,0.23)' : '',
              }}
            >
              <span className={styles.time}>{dateTimeFormat(last.time)}</span>
              <Link
                style={{ textDecoration: 'none' }}
                to={`/player/${last.attacker || last.victim}`}
                key={last.attacker || last.victim}
                className={styles.message}
                onClick={() => setPlayerModal(last.attacker || last.victim)}
              >
                {last.attackerName || last.victimName}
              </Link>
              <span>{last.server === 1 ? 'OC1' : 'OC2'}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
