import React, { createContext } from 'react'

export type LayersContextType = [boolean | null, React.Dispatch<boolean>]

export const LayersContext = createContext<LayersContextType | null>(null)
