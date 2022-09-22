export interface Team {
  teamName: string
  id: number
  squads: Squad[]
  playersWithoutSquad: PlayerWithoutSquad[]
}

export interface Squad {
  teamId: number
  id: number
  name: string
  size: number
  isLocked: boolean
  creatorName: string
  creatorSteam64id: string
  players: Player[]
}

export interface Player {
  id: number
  steamId: string
  name: string
  teamId: number
  squadID: number
  isSquadLeader: boolean
  role: string
}

export interface PlayerWithoutSquad extends Omit<Player, 'squadID'> {
  squadID: null
}

export interface DisconnectedPlayer
  extends Pick<Player, 'id' | 'steamId' | 'name'> {
  sinceDisconnected: string
}
