export const extendData = (data) => {
  // const squadCreators = data.teams.map(team => team.squads.map(squad => squad.creatorSteam64id))

  const addSLViolations = (player) => {

    const createdSquadsTeams = data.teams.map(team => ({
      id: team.id, squads: team.squads.filter(squad => squad.creatorSteam64id === player.steam64id)
    }))

    createdSquadsTeams.forEach(team => team.squads.forEach(squad => {

      if (player.squadID === squad.id && !player.isSquadLeader) {
        player.violations.push({name: 'SL drop', payload: {}})
      }

      else if (player.squadID !== squad.id) {
        player.violations.push({name: 'squad drop', payload: {}})
      }

    }))}

  const addSLInvalidKitViolation = (player) => {
    if (player.isSquadLeader && !['SL', 'SLCrewman', 'SLPilot'].includes(player.role.split('_')[1]))
      player.violations.push({name: 'invalid kit', payload: {}})
  }

  const addCrewmanSLWithBigSquadViolation = (player) => {
    if (player.isSquadLeader && ['SLCrewman', 'SLPilot'].includes(player.role.split('_')[1])) {

      const squads = data.teams.map(team => team.squads).flat() // [{squad 1}, {squad 2}, ... {squad 10}]
      const playerSquad = squads.find(squad => squad.players.find(member => member.id === player.id))

      if (playerSquad.size > 4) {
        player.violations.push({name: 'crewman with big squad', payload: {}})
      }
    }
  }

  const violationsFunctions = [addSLViolations, addSLInvalidKitViolation, addCrewmanSLWithBigSquadViolation]
  const players = flatData(data)

  players.forEach(player => {
    player.violations = []
    violationsFunctions.forEach(func => func(player))
  })
}

export const flatData = (data) => {
  return data.teams.map(team => team.squads.map(squad => squad.players.map(player => player))).flat(2)
}


