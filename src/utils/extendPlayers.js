const SLKits = ['SL', 'SLCrewman', 'SLPilot']
const SLCrewmanKits = ['SLCrewman', 'SLPilot']

export const extendData = (data) => {
  data.teams.forEach((team) =>
    team.squads.forEach(sortSquadLeadersFirstOnPlace)
  )

  const addSLViolations = (player) => {
    const createdSquadsTeams = data.teams.map((team) => ({
      id: team.id,
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
              message: `Бросил отряд ${squad.id}${
                player.teamId !== squad.teamId
                  ? ' в противоположной команде'
                  : ''
              }`,
            },
          })
        }
      })
    )
  }

  const addSLInvalidKitViolation = (player) => {
    if (player.isSquadLeader && !SLKits.includes(player.role.split('_')[1]))
      player.violations.push({
        name: 'invalid kit',
        payload: {
          message: 'Без кита сквадного',
        },
      })
  }

  const addCrewmanSLWithBigSquadViolation = (player) => {
    if (
      player.isSquadLeader &&
      SLCrewmanKits.includes(player.role.split('_')[1])
    ) {
      const squads = data.teams.map((team) => team.squads).flat()
      const playerSquad = squads.find((squad) =>
        squad.players.find((member) => member.id === player.id)
      )

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
  const players = flatData(data)

  players.forEach((player) => {
    player.violations = []
    violationsFunctions.forEach((func) => func(player))
  })
}

export const flatData = (data) => {
  return data.teams
    .map((team) =>
      team.squads.map((squad) => squad.players.map((player) => player))
    )
    .flat(2)
}

const sortSquadLeadersFirstOnPlace = (squad) => {
  squad.players.sort((a) => (a.isSquadLeader ? -1 : 1))
}

// const player = teams?.map((team) =>
//   team.squads.map((squad) => squad.players.map((player) => player)).flat(2)
// )
