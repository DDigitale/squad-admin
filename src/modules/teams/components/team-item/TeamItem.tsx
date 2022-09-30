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
        `assets/img/flags/flag_${team.teamNameShort}.png`
      )
      setFlagImg(flagImg)
    }
    getImg()
  }, [])

  let team1: any
  switch (team.teamNameShort) {
    case 'CAF':
      team1 = 'Канада'
      break
    case 'GB':
      team1 = 'Великобритания'
      break
    case 'INS':
      team1 = 'Повстанцы'
      break
    case 'MIL':
      team1 = 'Ополченцы'
      break
    case 'RUS':
      team1 = 'Россия'
      break
    case 'USA':
      team1 = 'США'
      break
    case 'USMC':
      team1 = 'Морпехи'
      break
    case 'MEA':
      team1 = 'МЕА'
      break
    case 'AUS':
      team1 = 'Австралия'
      break
    default:
      team1 = '---'
      break
  }

  return (
    <>
      <div className={styles.teamWrapper}>
        <div className={styles.flagWrapper}>
          <div className={styles.flagContent}>
            <img src={flagImg!} alt="" />
            <p className={styles.generatedName}>{team1}</p>
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
