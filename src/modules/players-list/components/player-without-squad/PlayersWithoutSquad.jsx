import React from 'react'
import styles from './PlayersWithoutSquad.module.scss'
import { showModal } from 'store'
import { useDispatch } from 'react-redux'

export function PlayersWithoutSquad(props) {
  const dispatch = useDispatch()
  const { pws: player } = props

  return (
    <>
      <div className="pws-wrapper">
        <div
          key={player.id}
          className={styles.item}
          onClick={() => dispatch(showModal({ player }))}
        >
          <img
            className={styles.icon}
            src={require(`assets/img/kits/${
              player.role.split(new RegExp('_'))[1]
            }.svg`)}
          />
          <p className={styles.name}>{player.name}</p>
        </div>
      </div>
    </>
  )
}
