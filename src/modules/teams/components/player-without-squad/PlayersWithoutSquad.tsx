import React, { useContext } from 'react'
import styles from './PlayersWithoutSquad.module.scss'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { PlayerWithoutSquad } from 'types/players'
import { RiErrorWarningFill } from 'react-icons/ri'

interface Props {
  player: PlayerWithoutSquad
}

export function PlayersWithoutSquad({ player }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  return (
    <>
      <div className="pws-wrapper">
        <div
          key={player.id}
          className={styles.item}
          onClick={() => setPlayerModal(player.steamId)}
        >
          <img
            className={styles.icon}
            src={require(`assets/img/kits/${
              player.role.split(new RegExp('_'))[1]
            }.svg`)}
            alt="kit-icon"
          />
          <p className={styles.name}>{player.name}</p>
          {player.isOnControl && (
            <RiErrorWarningFill
              style={{
                color: '#FD4B4CFF',
                fontSize: '2rem',
                marginLeft: 'auto',
              }}
            />
          )}
        </div>
      </div>
    </>
  )
}
