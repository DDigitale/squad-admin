import React, { createContext } from 'react'
import { steamId } from 'types/players'

export type ModalContextType = [steamId | null, React.Dispatch<steamId>]

export const ModalContext = createContext<ModalContextType | null>(null)
