import React from 'react'
import styles from 'modules/teams/Teams.module.scss'

import { Team } from 'types/players'
import { TeamItem } from './components'

interface Props {
  teams: Team[]
}

export function Teams({ teams }: Props) {
  return (
    <>
      <div className={styles.wrapper}>
        {teams?.map((team) => (
          <TeamItem key={team.id} team={team} />
        ))}
      </div>
    </>
  )
}
