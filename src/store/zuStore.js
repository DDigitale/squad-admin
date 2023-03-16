import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const useRotationStore = create(
  persist(
    devtools(
      immer((set, get) => ({
        layers: [],
        rotationName: '',
        rotationId: 0,
        editRotationName: (text) =>
          set((state) => void (state.rotationName = text)),
        setRotationId: (id) => set((state) => void (state.rotationId = id)),
        addLayer: (layer) =>
          set((state) => {
            state.layers.push(layer)
          }),
        updateLayers(layersData) {
          set({ layers: layersData })
        },
        removeLayer(layer) {
          const newLayers = get().layers.filter((l) => l.id !== layer.id)
          set({ layers: newLayers })
        },
        clearState() {
          set({ layers: [], rotationName: '', rotationId: 0 })
        },
      }))
    ),
    { name: 'rotation', version: 1 }
  )
)
