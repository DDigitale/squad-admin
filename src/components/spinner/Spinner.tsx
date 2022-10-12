import React from 'react'
import styles from './Spinner.module.scss'
import { BarLoader, MoonLoader, PulseLoader } from 'react-spinners'

export function Spinner() {
  return (
    <div className={styles.spinner}>
      <BarLoader color={'#fafafa'} width={300} />
    </div>
  )
}
