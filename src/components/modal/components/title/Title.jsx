import React from 'react'
import styles from 'modules/player-modal/PlayerModal.module.scss'

export function Title({ player }) {
  return (
    <div className={styles.title}>
      <img
        className={styles.avatar}
        src={require('assets/img/modal-avatar.png')}
        alt=""
      />
      <div className={styles.info}>
        <p className={styles.name}>{player.name}</p>
        <a
          className={styles.link}
          href={`http://steamcommunity.com/profiles/${player.steamId}`}
          target="_blank"
        >
          ID: {player.steamId}
        </a>
      </div>
    </div>
  )
}
