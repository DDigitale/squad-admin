import React, { ReactNode } from 'react'
import styles from './Layout.module.scss'

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <main>{children}</main>
    </div>
  )
}
