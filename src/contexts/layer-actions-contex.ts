import React, { createContext } from 'react'
import { layer } from 'types/layers'

export type LayerActionsContextType = [layer | undefined, React.Dispatch<layer>]

export const LayerActionsContext = createContext<
  LayerActionsContextType | undefined
>(undefined)
