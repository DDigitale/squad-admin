import { IGetOnline } from 'api/users'
import { Players, Squad, Team } from 'types/players'

const SLKits = ['SL', 'SLCrewman', 'SLPilot']
const SLCrewmanKits = ['SLCrewman', 'SLPilot']

export const extendData = (data: IGetOnline) => {
  // saturate each player with violations
  data.teams.forEach((team) =>
    team.squads.forEach(sortSquadLeadersFirstOnPlace)
  )

  const addSLViolations = (player: Players) => {
    const createdSquadsTeams = data.teams.map((team) => ({
      id: team.id,
      team: team.teamName,
      squads: team.squads.filter(
        (squad) => squad.creatorSteam64id === player.steamId
      ),
    }))

    createdSquadsTeams.forEach((team) =>
      team.squads.forEach((squad) => {
        if (player.squadID === squad.id && !player.isSquadLeader) {
          player.violations.push({
            name: 'SL drop',
            payload: {
              message: `Перекинул сквадного`,
            },
          })
        } else if (player.squadID !== squad.id) {
          player.violations.push({
            name: 'squad drop',
            payload: {
              message: `Бросил отряд ${squad.id} ${
                player.teamId !== squad.teamId
                  ? ` в противоположной команде`
                  : ''
              }`,
            },
          })
        }
      })
    )
  }

  const addSLInvalidKitViolation = (player: Players) => {
    if (player.isSquadLeader && !SLKits.includes(player.role.split('_')[1]))
      player.violations.push({
        name: 'invalid kit',
        payload: {
          message: `Без кита сквадного`,
        },
      })
  }

  const addCrewmanSLWithBigSquadViolation = (player: Players) => {
    if (
      player.isSquadLeader &&
      SLCrewmanKits.includes(player.role.split('_')[1])
    ) {
      const squads = data.teams.map((team) => team.squads).flat()
      const playerSquad = squads.find((squad) =>
        squad.players.find((member) => member.id === player.id)
      )

      if (playerSquad === undefined) throw new Error('playerSquad not found')

      if (playerSquad.size > 4) {
        player.violations.push({
          name: 'crewman with big squad',
          payload: {
            message: 'Больше 4х игроков в тех скваде',
          },
        })
      }
    }
  }

  const violationsFunctions = [
    addSLViolations,
    addSLInvalidKitViolation,
    addCrewmanSLWithBigSquadViolation,
  ]
  const players = flatTeams(data.teams)

  players.forEach((player: Players) => {
    player.violations = []
    violationsFunctions.forEach((func) => func(player))
  })
}

export const flatTeams = (teams: Team[]): Players[] => {
  return teams
    .map((team) =>
      team.squads.map((squad) => squad.players.map((player) => player))
    )
    .flat(2)
}

const sortSquadLeadersFirstOnPlace = (squad: Squad) => {
  squad.players.sort((a) => (a.isSquadLeader ? -1 : 1))
}

// const player = teams?.map((team) =>
//   team.squads.map((squad) => squad.players.map((player) => player)).flat(2)
// )
