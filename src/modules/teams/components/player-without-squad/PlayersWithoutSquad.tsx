import React, { useContext, useEffect, useState } from 'react'
import styles from './PlayersWithoutSquad.module.scss'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { PlayerWithoutSquad } from 'types/players'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

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

  const location = useLocation()

  return (
    <Link
      style={{ textDecoration: 'none' }}
      onClick={() => setPlayerModal(player.steamId)}
      to={`player/${player.steamId}`}
      state={{ background: location }}
    >
      <div key={player.id} className={styles.item}>
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
    </Link>
  )
}
