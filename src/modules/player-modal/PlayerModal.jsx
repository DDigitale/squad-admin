import React from 'react'
import styles from './PlayerModal.module.scss'
import { Modal } from '../../components/modal'
import { useQuery } from '@tanstack/react-query'
import { fetchPlayer } from 'api/users'
import { Actions } from 'components/modal/components/actions/Actions'
import { Title } from 'components/modal/components/title/Title'
import { Bans } from 'components/modal/components/bans/Bans'
import { Chat } from '../../components/modal/components/chat/Chat'
import { Teamkills } from '../../components/modal/components/teamkills/Teamkills'

export function PlayerModal({ player, onClose }) {
  return (
    <Modal onClose={onClose}>
      <Title player={player} />
      <div className={styles.wrapper}>
        <Actions player={player} />
        {/*<Bans player={player} />*/}
        {/*<Teamkills player={player} />*/}
        <Chat player={player} />
      </div>
    </Modal>
  )
}
