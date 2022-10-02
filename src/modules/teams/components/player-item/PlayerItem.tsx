import React, { useContext, useEffect, useState } from 'react'
import styles from './PlayerItem.module.scss'
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
  }, [])

  return (
    <>
      <div
        style={{
          backgroundColor:
            player.violations.length > 0 ? 'rgba(253,75,76,0.07)' : '',
        }}
        className={styles.wrapper}
        onClick={() => setPlayerModal(player.steamId)}
      >
        {kitImg && <img className={styles.icon} src={kitImg} alt="kit-icon" />}
        <span className={styles.name}>{player.name}</span>
      </div>
    </>
  )
}
