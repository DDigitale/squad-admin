import React, { ComponentPropsWithRef, forwardRef } from 'react'
import styles from './Card.module.scss'
import classnames from 'classnames'

export const Card = forwardRef<HTMLDivElement, ComponentPropsWithRef<'div'>>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <div
        className={classnames(styles.card, className)}
        {...restProps}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)
