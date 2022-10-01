import React, { useContext } from 'react'
import styles from './PlayersTable.module.scss'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'

interface Props {
  content: any
}

export function PlayersTable({ content: players }: Props) {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

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
              <td onClick={() => setPlayerModal(player.steamId)}>
                {player.name}
              </td>
              <td>
                <a
                  href={`http://steamcommunity.com/profiles/${player.steamId}`}
                  target="_blank"
                >
                  {player.steamId}
                </a>
              </td>
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
