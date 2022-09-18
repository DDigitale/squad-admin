import React from 'react'
import { LogoutBtn } from '../store/features/logout/LogoutBtn'

function Header() {
  return (
    <div className="header">
      <p className="header-title">Админ панель сервера server_name</p>
      <p className="header-tps">Текущий TPS: 30</p>
      <p className="header-players">Игроков на сервере: 99/100</p>
      <p className="header-map-info">Текущая карта: CURRENT_MAP_V1</p>
      <p className="header-map-info">Следующая карта: NEXT_MAP_V1</p>
      <button className="header-map-btn">Сменить следующую</button>
      <button className="header-map-btn">Сменить текущую</button>
      <LogoutBtn />
    </div>
  )
}

export default Header
