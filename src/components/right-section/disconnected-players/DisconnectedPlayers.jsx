import React from 'react'
import {
  selectPlayers,
  selectPlayersInfo,
} from '../../../store/features/get-players/getPlayersSlice'
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '../../../store/features/modal/modalSlice'

function DisconnectedPlayers() {
  const dispatch = useDispatch()
  const { isLoading, isError, isSuccess } = useSelector(selectPlayersInfo)
  const players = useSelector(selectPlayers)

  return (
    <>
      {isSuccess && (
        <div className="disconnected-players-wrapper">
          <p>Отключившиеся игроки</p>
          <div className="disconnected-players-list">
            {players.disconnectedPlayers.map((player) => (
              <div
                key={player.id}
                className="disconnected-player-item"
                onClick={() => dispatch(showModal({ player }))}
              >
                <div className="disconnected-player-name">{player.name}</div>
                <div className="disconnected-player-since">
                  {player.sinceDisconnected} назад
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default DisconnectedPlayers
