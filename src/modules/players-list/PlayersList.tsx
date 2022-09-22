import React from 'react'
import styles from './PlayersList.module.scss'
import { TeamItem } from 'modules/players-list/components/team-item/TeamItem'
import { Team } from '../../types/player'

interface Props {
  teams: Team[]
}

export function PlayersList({ teams }: Props) {
  return (
    <>
      <div className={styles.wrapper}>
        {teams.map((team) => (
          <TeamItem key={team.id} team={team} />
        ))}
      </div>
    </>
  )
}
