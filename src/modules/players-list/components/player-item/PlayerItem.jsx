import React, { useContext, useEffect, useState } from 'react'
import styles from './PlayerItem.module.scss'
import { useDispatch } from 'react-redux'
import { showModal } from 'store/slices/modal/modalSlice'
import { ModalContext } from 'contexts'

export function PlayerItem({ player }) {
  const dispatch = useDispatch()
  const [playerInModal, setPlayerInModal] = useContext(ModalContext)

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
        className={styles.wrapper}
        // onClick={() => dispatch(showModal({ player }))}
        onClick={() => setPlayerInModal(player.id)}
      >
        {kitImg && <img className={styles.icon} src={kitImg} />}
        <span className={styles.name}>{player.name}</span>
      </div>
    </>
  )
}
