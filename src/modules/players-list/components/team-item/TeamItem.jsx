import React from 'react'
import styles from './TeamItem.module.scss'
import { SquadItem } from 'modules/players-list/components/squad-item/SquadItem'
import { PlayersWithoutSquad } from 'modules/players-list/components/player-without-squad/PlayersWithoutSquad'

export function TeamItem({ team }) {
  return (
    <>
      <div className={styles.teamWrapper}>
        <div className={styles.flagWrapper}>
          <div className={styles.flagContent}>
            <img src={require('assets/img/flag_rus.png')} alt="" />
            <p className={styles.generatedName}>Россия</p>
          </div>
          <span className={styles.defaultName}>{team.teamName}</span>
        </div>
        {team.squads.map((squad) => (
          <SquadItem key={squad.id} squad={squad} team={team} />
        ))}
        <div className={styles.title}>Игроки без отряда</div>
        {team.playersWithoutSquad.map((pws) => (
          <PlayersWithoutSquad key={pws.id} pws={pws} />
        ))}
      </div>
    </>
  )
}
