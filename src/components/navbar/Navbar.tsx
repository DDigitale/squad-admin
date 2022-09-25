import React from 'react'
import styles from './Navbar.module.scss'
import { VscTable } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'

const links: [string, string][] = [
  ['панель', '/'],
  ['игроки', '/players'],
]

export function Navbar() {
  return (
    <div className={styles.wrapper}>
      {links.map(([title, link]) => (
        <NavLink to={link}>
          <span className={styles.name}>{title}</span>
        </NavLink>
      ))}
    </div>
  )
}
