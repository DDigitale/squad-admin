import React, { useContext, useEffect, useState } from 'react'
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
  const [kitImg, setKitImg] = useState(null)

  useEffect(() => {
    const getImg = async () => {
      try {
        const { default: kitImg } = await import(
          `../../../../assets/img/kits/${player.role.split('_')[1]}.svg`
        )
        setKitImg(kitImg)
      } catch (e) {}
    }
    getImg()
  }, [player.role])

  return (
    <div className="pws-wrapper">
      <div
        key={player.id}
        className={styles.item}
        onClick={() => setPlayerModal(player.steamId)}
      >
        {kitImg ? (
          <img className={styles.icon} src={`${kitImg}`} />
        ) : (
          <span style={{ fontSize: '0.75rem' }}>
            {player.role.split('_')[1]}
          </span>
        )}

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
  )
}
