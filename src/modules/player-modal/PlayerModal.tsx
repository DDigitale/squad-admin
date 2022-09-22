import React, { useState } from 'react'
import styles from './PlayerModal.module.scss'
import { Modal } from '../../components/modal'
import { Actions } from 'components/modal/components/actions/Actions'
import { Title } from 'components/modal/components/title/Title'
import { Chat } from '../../components/modal/components/chat/Chat'
import { Player, PlayerWithoutSquad } from '../../types/player'
import { ActionBtn } from '../../components/modal/components/action-btn/ActionBtn'

interface Props {
  player: Player | PlayerWithoutSquad
  onClose: () => void
}

export function PlayerModal({ player, onClose }: Props) {
  const [selectedTab, setSelectedTab] = useState(1)

  return (
    <Modal onClose={onClose}>
      <Title player={player} />
      <Actions player={player} />
      <div className={styles.tablesBtn}>
        <ActionBtn text={'Чат'} onClick={() => setSelectedTab(1)} />
        <ActionBtn text={'Баны'} onClick={() => setSelectedTab(2)} />
        <ActionBtn text={'Тимкиллы'} onClick={() => setSelectedTab(3)} />
      </div>
      <div>
        {selectedTab === 1 && <Chat playerSteamId={player.steamId} />}
        {/*{selectedTab === 2 && <Chat playerSteamId={player.steamId} />}*/}
        {selectedTab === 2 && <h1>БАНЫ</h1>}
        {/*{selectedTab === 3 && <Chat playerSteamId={player.steamId} />}*/}
        {selectedTab === 3 && <h1>ТИМКИЛЛЫ</h1>}
      </div>
      {/*<Bans player={player} />*/}
      {/*<Teamkills player={player} />*/}
    </Modal>
  )
}
