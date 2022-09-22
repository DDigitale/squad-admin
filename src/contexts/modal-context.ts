import React, { createContext } from 'react'
import { Player, PlayerWithoutSquad } from '../types/player'

export type ModalContextType = [
  Player | PlayerWithoutSquad | null,
  React.Dispatch<Player | PlayerWithoutSquad>
]

export const ModalContext = createContext<ModalContextType | null>(null)
