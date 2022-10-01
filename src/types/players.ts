export interface Team {
  teamNameShort: string
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
  players: Players[]
}

interface PlayerBase {
  name: string
  steamId: string
}

export interface Players extends PlayerBase {
  id: number
  teamId: number
  squadID: number
  isSquadLeader: boolean
  role: string
  violations: Violation[]
}

export interface PlayerWithoutSquad extends Omit<Players, 'squadID'> {
  squadID: null
}

export interface DisconnectedPlayer extends PlayerBase {
  id: number
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
  adminsBySteamId: any
  admin: any
  playerSteamId: string
  isUnbannedManually: boolean
  unbannedAdminId: string
  unbannedTime: Date | null
  creationTime: Date
  expirationTime: Date
}

export interface Player extends PlayerBase {
  createTime: Date
  playersBansBySteamId: Ban[]
  playersKicksBySteamId: any
  playersMessagesBySteamId: Message[]
  playersNotesBySteamId: any
}

export type steamId = string

export interface Chat {
  time: string
  type: string
  chainID: bigint
  chatType: string
  steamId: string
  playerName: string
  message: string
  completeString: string
}
