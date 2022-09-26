import React, { createContext } from 'react'

export type LayerModalContextType = [boolean | null, React.Dispatch<boolean>]

export const LayerModalContext = createContext<LayerModalContextType | null>(
  null
)
