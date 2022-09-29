import React, { createContext } from 'react'
import { steamId } from 'types/players'

export type PlayerModalContextType = [steamId | null, React.Dispatch<steamId>]

export const PlayerModalContext = createContext<PlayerModalContextType | null>(
  null
)
