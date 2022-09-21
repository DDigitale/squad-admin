import React from 'react'
import styles from './SuspectedPlayers.module.scss'
import { showModal } from 'store/slices/modal/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectPlayers } from 'store/slices/get-players/getOnlineSlice'
import { flatData } from 'utils/extendPlayers'
import { ViolationRow } from 'modules/suspected-players/components/ViolationRow'

export function SuspectedPlayers() {
  const dispatch = useDispatch()
  let data = useSelector((state) => selectPlayers(state))

  const players = data
    ? flatData(data).filter((player) => player.violations.length > 0)
    : []

  const rowClickHandler = (player) => {
    dispatch(showModal({ player }))
  }

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.title}>Нарушители</span>
        {players.map((player) => (
          <div
            key={player.id}
            onClick={() => rowClickHandler(player)}
            className={styles.list}
          >
            <span className={styles.name}>{player.name}</span>
            <ul>
              {player.violations.map((violation, index) => (
                <ViolationRow key={index} {...violation} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
