import React, { ReactNode } from 'react'
import styles from './Layout.module.scss'
import { Navbar } from 'components'
import Header from 'components/header/Header'

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
