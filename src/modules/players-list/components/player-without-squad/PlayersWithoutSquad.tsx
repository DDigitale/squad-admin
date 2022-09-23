import React, { useContext } from 'react'
import styles from './PlayersWithoutSquad.module.scss'
import { ModalContext, ModalContextType } from 'contexts'
import { PlayerWithoutSquad } from '../../../../types/player'

interface Props {
  player: PlayerWithoutSquad
}

export function PlayersWithoutSquad({ player }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    ModalContext
  ) as ModalContextType

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
