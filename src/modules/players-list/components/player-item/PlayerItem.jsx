import React, { useContext, useEffect, useState } from 'react'
import styles from './PlayerItem.module.scss'
import { ModalContext } from 'contexts'

export function PlayerItem({ player }) {
  const [playerModal, setPlayerModal] = useContext(ModalContext)

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
        {kitImg && <img className={styles.icon} src={kitImg} />}
        <span className={styles.name}>{player.name}</span>
      </div>
    </>
  )
}
