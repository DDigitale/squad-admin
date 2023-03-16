import React, { useContext, useEffect, useState } from 'react'
import styles from './PlayerItem.module.scss'
import { RiErrorWarningFill } from 'react-icons/ri'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { Players, PlayerWithoutSquad } from 'types/players'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  player: Players | PlayerWithoutSquad
}

export function PlayerItem({ player }: Props) {
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

  const colorizePlayers = () => {
    if (player.violations.length > 0) {
      return 'rgba(253,75,76,0.5)'
    }

    if (player.isAdmin) {
      return 'rgba(51,253,217,0.65)'
    }
  }

  const location = useLocation()

  return (
    <>
      <Link
        style={{ textDecoration: 'none' }}
        to={`player/${player.steamId}`}
        state={{ background: location }}
        className={styles.wrapper}
        onClick={() => setPlayerModal(player.steamId)}
      >
        {kitImg ? (
          <img className={styles.icon} src={kitImg} />
        ) : (
          <span style={{ fontSize: '0.75rem' }}>
            {player.role.split('_')[1]}
          </span>
        )}
        <span className={styles.name} style={{ color: colorizePlayers() }}>
          {player.name}
        </span>
        {player.isOnControl && (
          <RiErrorWarningFill
            title={'на контроле'}
            style={{ color: '#FD4B4CFF', fontSize: '2rem' }}
          />
        )}
      </Link>
    </>
  )
}
