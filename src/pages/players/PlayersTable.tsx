import React from 'react'
import styles from './PlayersTable.module.scss'

interface Props {
  content: any
}

export function PlayersTable({ content: players }: Props) {
  return (
    <div className={styles.wrapper}>
      <table>
        <thead>
          <tr>
            <th>Никнейм</th>
            <th>SteamId</th>
            <th>Баны</th>
            <th>Кики</th>
            <th>Сообщения</th>
            <th>Заметки</th>
          </tr>
        </thead>

        {players.map((player: any) => (
          <tbody key={player.steamId}>
            <tr>
              <td>{player.name}</td>
              <td>{player.steamId}</td>
              <td>{player.playersBansBySteamId}</td>
              <td>{player.playersKicksBySteamId}</td>
              <td>{player.playersMessagesBySteamId}</td>
              <td>{player.playersNotesBySteamId}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}
