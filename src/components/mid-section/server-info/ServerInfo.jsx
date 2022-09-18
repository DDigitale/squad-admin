import React from 'react'

export function ServerInfo() {
  return (
    <div className="server-info">
      <div className="server-info-titles">
        <span>Текущий TPS</span>
        <span>Игроков на сервере</span>
        <span>Текущая карта 1:49:53</span>
      </div>
      <div className="server-info-counters">
        <span>30</span>
        <span>99/100 (+23)</span>
        <span>Gorodok AAS v1</span>
      </div>
    </div>
  )
}
