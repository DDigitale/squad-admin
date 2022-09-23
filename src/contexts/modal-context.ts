import React, { createContext } from 'react'
import { validPlayer } from 'modules/player-modal/PlayerModal'

export type ModalContextType = [validPlayer | null, React.Dispatch<validPlayer>]

export const ModalContext = createContext<ModalContextType | null>(null)
