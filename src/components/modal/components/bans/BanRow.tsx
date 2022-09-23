import React from 'react'
import styles from './BansRow.module.scss'
import {Ban} from '../../../../types/player'

interface Props {
    ban: Ban
}

export function BanRow({ban}: Props) {

    const creationTime = new Date(ban.creationTime)
    const expirationTime = new Date(ban.expirationTime)
    const unbannedTime = new Date(ban.unbannedTime !== null ? ban.unbannedTime : '')

    return (
        <div className={styles.row}>
            <div className={styles.up}>
                <span className={styles.adminName}>VoblaCringitale</span>
                <span className={styles.creationTime}>{creationTime.toLocaleString()}</span>
            </div>
            <div className={styles.down}>
                <span className={styles.reason}>{ban.reason}</span>
                <span className={styles.expirationTime}>До: {expirationTime.toLocaleString()}</span>
            </div>

            {/*<span className={styles.isUnbannedManually}>{ban.isUnbannedManually.toString()}</span>*/}
            {/*<span className={styles.unbannedTime}>{unbannedTime.toLocaleString()}</span>*/}
        </div>
    )
}
