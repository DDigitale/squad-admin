import React from 'react'
import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

const links: [string, string][] = [
  ['панель', '/'],
  ['игроки', '/players'],
  ['админы', '/admins'],
  ['админ лог', '/admins-log'],
]

export function Navbar() {
  return (
    <div className={styles.wrapper}>
      {links.map(([title, link], index) => (
        <NavLink key={index} to={link}>
          <span className={styles.name}>{title}</span>
        </NavLink>
      ))}
    </div>
  )
}
