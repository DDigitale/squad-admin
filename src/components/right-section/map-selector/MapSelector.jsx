import React from 'react'
import { HiSwitchHorizontal } from 'react-icons/hi'

export function MapSelector() {
  return (
    <div className="map-selector-wrapper">
      <div className="map-selector-content">
        <p className="map-selector-title">Следующая карта</p>
        <p className="map-selector-next-map">Sumari Bala RAAS v2</p>
        <button className="map-selector-button">
          <HiSwitchHorizontal />
          Сменить карту
        </button>
      </div>
    </div>
  )
}
