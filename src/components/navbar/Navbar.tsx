import React from 'react'
import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

let links = [
  // ['панель', '/'],
  // ['админы', '/admins-list'],
  // ['админ лог', '/admins-log'],
  // ['баны', '/bans-log'],
  // ['игроки', '/players-list'],
  // ['чат', '/chat-log'],
  // ['управление', '/admin-route'],
]

export function Navbar() {
  const roles = localStorage.getItem('roles')

  links = [
    ['панель', '/'],
    roles?.includes(
      'Admins Management' ||
        'Roles Management' ||
        'Rotation Management' ||
        'Rules Management'
    )
      ? ['управление', '/admin-route']
      : ['', ''],
    !roles?.includes('Admin log access')
      ? ['', '']
      : ['игроки', '/players-list'],
    ['админы', '/admins-list'],
    ['админ лог', '/admins-log'],
    ['баны', '/bans-log'],
    ['чат', '/chat-log'],
  ]

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
