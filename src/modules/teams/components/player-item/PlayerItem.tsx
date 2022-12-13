import React, { useContext, useEffect, useState } from 'react'
import styles from './PlayerItem.module.scss'
import { RiErrorWarningFill } from 'react-icons/ri'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { Players, PlayerWithoutSquad } from 'types/players'

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
      const { default: kitImg } = await import(
        `assets/img/kits/${player.role.split('_')[1]}.svg`
      )
      setKitImg(kitImg)
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

  return (
    <>
      <div
        className={styles.wrapper}
        onClick={() => setPlayerModal(player.steamId)}
      >
        {kitImg && (
          <img className={styles.icon} src={kitImg} alt={player.role} />
        )}
        <span className={styles.name} style={{ color: colorizePlayers() }}>
          {player.name}
        </span>
        {player.isOnControl && (
          <RiErrorWarningFill
            style={{ color: '#FD4B4CFF', fontSize: '2rem' }}
          />
        )}
      </div>
    </>
  )
}
