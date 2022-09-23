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
  violations: Violation[]
}

export interface PlayerWithoutSquad extends Omit<Player, 'squadID'> {
  squadID: null
}

export interface DisconnectedPlayer
  extends Pick<Player, 'id' | 'steamId' | 'name'> {
  sinceDisconnected: string
}

type violationName =
  | 'SL drop'
  | 'squad drop'
  | 'invalid kit'
  | 'crewman with big squad'

export interface Violation {
  name: violationName
  payload: { message: string }
}

export interface Message {
  id: number
  chatType: string
  message: string
  creationTime: Date
}

export interface Ban {
  id: number
  reason: string
  adminSteamId: string
  playerSteamId: string
  isUnbannedManually: boolean
  unbannedAdminId: string
  unbannedTime: Date | null
  creationTime: Date
  expirationTime: Date
}
