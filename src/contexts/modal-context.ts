import React, { createContext } from 'react'

export type ModalContextType = [any, React.Dispatch<any>]

export const ModalContext = createContext<ModalContextType | null>(null)
