import React, { useContext, useEffect, useState } from 'react'
import styles from './PlayerItem.module.scss'
import { ModalContext, ModalContextType } from 'contexts'
import { Player, PlayerWithoutSquad } from 'types/player'

interface Props {
  player: Player | PlayerWithoutSquad
}

export function PlayerItem({ player }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    ModalContext
  ) as ModalContextType

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
      <div className={styles.wrapper} onClick={() => setPlayerModal(player)}>
        {kitImg && <img className={styles.icon} src={kitImg} alt="kit-icon" />}
        <span className={styles.name}>{player.name}</span>
      </div>
    </>
  )
}
