import React from 'react'
import styles from './Title.module.scss'
import { MdNavigateNext } from 'react-icons/md'

interface Props {
  player: any
  showActions: Function
}

export function Title({ player, showActions }: Props) {
  return (
    <div className={styles.title}>
      <div className={styles.container}>
        <img
          className={styles.avatar}
          src={
            'https://avatars.akamai.steamstatic.com/d07902ea2f6117b057df1a65def182d81b99b972_full.jpg'
          }
          alt=""
        />
        <div className={styles.info}>
          <p className={styles.name}>{player.name}</p>
          {player.isOnline ? (
            <>
              <p>В команде {player.isOnline?.teamId}</p>
              <p>В отряде {player.isOnline?.squadID}</p>
            </>
          ) : (
            <p>Игрок оффлайн</p>
          )}
          <a
            className={styles.link}
            href={`http://steamcommunity.com/profiles/${player.steamId}`}
            target="_blank"
          >
            ID: {player.steamId}
          </a>
        </div>
      </div>
      <div className={styles.moveButton} onClick={() => showActions()}>
        <MdNavigateNext />
      </div>
    </div>
  )
}
