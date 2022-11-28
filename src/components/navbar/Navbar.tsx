import React from 'react'
import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

const links: [string, string][] = [
  // ['админы', '/admins'],
  ['панель', '/'],
  ['админ лог', '/admins-log'],
  ['баны', '/bans-log'],
  ['игроки', '/players'],
]

export function Navbar() {
  return (
    <div className={styles.wrapper}>
      {links.map(([title, link], index) => (
        <NavLink className={styles.link} key={index} to={link}>
          <span>{title}</span>
        </NavLink>
      ))}
    </div>
  )
}
