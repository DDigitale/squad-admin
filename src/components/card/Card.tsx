import React, { ComponentPropsWithoutRef } from 'react'
import styles from './Card.module.scss'
import classnames from 'classnames'

export function Card({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={classnames(styles.card, className)} {...props}>
      {children}
    </div>
  )
}
