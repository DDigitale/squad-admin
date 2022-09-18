import React, { useEffect } from 'react'
import { showModal } from '../../../store/features/modal/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RiAlarmWarningLine } from 'react-icons/ri'
import { selectPlayers } from '../../../store/features/get-players/getPlayersSlice'
import { flatData } from '../../../store/features/get-players/extendPlayers'

export function SuspectedPlayers() {
  const dispatch = useDispatch()
  let data = useSelector((state) => selectPlayers(state))

  const players = data
    ? flatData(data).filter((player) => player.violations.length > 0)
    : []

  return (
    <>
      <div className="suspect-players-wrapper">
        <div className="suspect-players-content">
          <p className="suspect-players-title">Нарушители</p>
          <div className="suspect-players-list">
            {players.map((player) => {
              const violationMessages = player.violations.map(
                (violationGroup) => {
                  if (violationGroup.name === 'unreliableSL') {
                    const SLViolationMessages = violationGroup.payload.map(
                      (violation) => {
                        if (violation.violation === 'SL drop') {
                          return `Перекинул сквадного в отряде ${violation.squadID} команды ${violation.teamID}`
                        }

                        if (violation.violation === 'SQ drop') {
                          return `Бросил отряд ${
                            player.squadID !== violation.squadID
                              ? `${violation.squadID}`
                              : ''
                          } ${
                            player.teamId !== violation.teamID
                              ? 'в противоположной команде'
                              : ''
                          }`
                        }

                        if (violation.violation === 'Tech SQ more than 4') {
                          return `В тех отряде ${violation.squadID} команды ${violation.teamID} больше чем 4 игрока`
                        }
                      }
                    )

                    return SLViolationMessages.join(', ')
                  }

                  if (violationGroup.name === 'invalidKit') {
                    return `Без кита сквадного в отряде ${player.squadID}`
                  }
                }
              )

              const violationString = violationMessages.join(', ')

              return (
                <div
                  key={player.id}
                  className="suspect-players-item"
                  onClick={() => dispatch(showModal({ player }))}
                >
                  <RiAlarmWarningLine
                    className="suspect-players-icon"
                    style={{ color: '#fdac34' }}
                  />
                  <div>
                    <p style={{ color: '#fdac34' }}>{player.name}</p>

                    <p style={{ color: '#fdac34' }}> {violationString}</p>
                  </div>
                </div>
              )

              // if (player.droppedSquad === 'out-of-squad') {
              // 	return <div key={player.id} className="suspect-players-item">
              // 		<RiAlarmWarningLine className="suspect-players-icon" style={{color: '#fd4b4c'}}/>
              // 		<p style={{color: '#fd4b4c'}}
              // 		   onClick={() => dispatch(showModal({player}))}>{player.name} - Создал отряд и вышел. Сейчас в {player.squadID} отряде {player.teamId} команды</p>
              // 	</div>
              // }

              // if (player.violations.find(violation => violation.name === 'hasInvalidKit')) {
              // 	return <div key={player.id} className="suspect-players-item">
              // 		<RiAlarmWarningLine className="suspect-players-icon" style={{color: '#33fdd9'}}/>
              // 		<p style={{color: '#33fdd9'}}
              // 		   onClick={() => dispatch(showModal({player}))}>{player.name} - Без кита CЛ в {player.squadID} отряде {player.teamId} команды</p>
              // 	</div>
              // }
            })}
          </div>
        </div>
      </div>
    </>
  )
}
