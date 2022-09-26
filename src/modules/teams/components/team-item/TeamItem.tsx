import React, { useEffect, useState } from 'react'
import styles from './TeamItem.module.scss'
import { Team } from 'types/players'
import { SquadItem } from '../squad-item'
import { PlayersWithoutSquad } from '../player-without-squad'

interface Props {
  team: Team
}

export function TeamItem({ team }: Props) {
  const [flagImg, setFlagImg] = useState(null)

  useEffect(() => {
    const getImg = async () => {
      const { default: flagImg } = await import(
        `assets/img/flags/flag_${team.teamName.split(' ')[0]}.png`
      )
      setFlagImg(flagImg)
    }
    getImg()
  }, [])

  return (
    <>
      <div className={styles.teamWrapper}>
        <div className={styles.flagWrapper}>
          <div className={styles.flagContent}>
            <img src={flagImg!} alt="" />
            <p className={styles.generatedName}>Россия</p>
          </div>
          <span className={styles.defaultName}>{team.teamName}</span>
        </div>
        {team.squads.map((squad) => (
          <SquadItem key={squad.id} squad={squad} />
        ))}
        <div className={styles.title}>Игроки без отряда</div>
        {team.playersWithoutSquad.map((player) => (
          <PlayersWithoutSquad key={player.id} player={player} />
        ))}
      </div>
    </>
  )
}
