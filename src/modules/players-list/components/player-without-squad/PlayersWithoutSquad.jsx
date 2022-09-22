import React, { useContext } from 'react'
import styles from './PlayersWithoutSquad.module.scss'
import { ModalContext } from 'contexts'

export function PlayersWithoutSquad({ player }) {
  const [playerModal, setPlayerModal] = useContext(ModalContext)

  return (
    <>
      <div className="pws-wrapper">
        <div
          key={player.id}
          className={styles.item}
          onClick={() => setPlayerModal(player)}
        >
          <img
            className={styles.icon}
            src={require(`assets/img/kits/${
              player.role.split(new RegExp('_'))[1]
            }.svg`)}
            alt="kit-icon"
          />
          <p className={styles.name}>{player.name}</p>
        </div>
      </div>
    </>
  )
}
