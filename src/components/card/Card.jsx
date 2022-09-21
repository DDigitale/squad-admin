import React from 'react'
import styles from './Card.modules.scss'
import classnames from "classnames";

export function Card({children, className, ...props}) {
  return <div className={classnames(styles.card, className)} {...props}>{children}</div>
}
