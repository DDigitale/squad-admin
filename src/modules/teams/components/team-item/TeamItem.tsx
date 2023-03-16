import { useEffect, useState } from 'react'
import { Team } from 'types/players'
import { factionConverter } from 'utils/factionConverter'
import { PlayersWithoutSquad } from '../player-without-squad'
import { SquadItem } from '../squad-item'
import styles from './TeamItem.module.scss'

interface Props {
  team: Team
}

export function TeamItem({ team }: Props) {
  const [flagImg, setFlagImg] = useState(null)

  useEffect(() => {
    const getImg = async () => {
      try {
        const { default: flagImg } = await import(
          `../../../../assets/img/flags/flag_${teamShort}.png`
        )
        setFlagImg(flagImg)
      } catch (e) {}
    }
    getImg()
  }, [team])

  let teamShort = factionConverter(team.teamNameShort)

  let teamName: string;

  switch (teamShort) {
    case 'CAF':
      teamName = 'Канада'
      break
    case 'GB':
      teamName = 'Великобритания'
      break
    case 'INS':
      teamName = 'Повстанцы'
      break
    case 'MIL':
      teamName = 'Ополченцы'
      break
    case 'RUS':
      teamName = 'Россия'
      break
    case 'USA':
      teamName = 'США'
      break
    case 'USMC':
      teamName = 'Морпехи'
      break
    case 'MEA':
      teamName = 'МЕА'
      break
    case 'AUS':
      teamName = 'Австралия'
      break
    case 'PLA':
      teamName = 'Китай'
      break
    default:
      teamName = '---'
      break
  }

  return (
    <div className={styles.teamWrapper}>
      <div className={styles.flagWrapper}>
        <div className={styles.flagContent}>
          <img src={flagImg!} alt="" />
          <p className={styles.generatedName}>{teamName}</p>
        </div>
      </div>
      {team.squads.map((squad) => (
        <SquadItem key={squad.id} squad={squad} />
      ))}
      {team.playersWithoutSquad.length === 0 ? null : (
        <div className={styles.title}>Игроки без отряда</div>
      )}

      {team.playersWithoutSquad.map((player) => (
        <PlayersWithoutSquad key={player.id} player={player} />
      ))}
    </div>
  )
}
