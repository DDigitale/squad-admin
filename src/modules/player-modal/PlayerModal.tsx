import React, { useRef, useState } from 'react'
import styles from './PlayerModal.module.scss'
import { Modal } from '../../components/modal'
import { Actions } from 'components/modal/components/actions/Actions'
import { Title } from 'components/modal/components/title/Title'
import { Chat } from 'components/modal/components/chat/Chat'
import { DisconnectedPlayer, Player, PlayerWithoutSquad } from 'types/player'
import { ActionBtn } from 'components/modal/components/action-btn/ActionBtn'
import { Bans } from 'components/modal/components/bans/Bans'
import { Card } from 'components/card/Card'
import { MdNavigateNext } from 'react-icons/md'

export type validPlayer = Player | PlayerWithoutSquad | DisconnectedPlayer

interface Props {
  player: validPlayer
  onClose: () => void
}

export function PlayerModal({ player, onClose }: Props) {
  const [toggle, setToggle] = useState(false)
  const [selectedTab, setSelectedTab] = useState(1)

  const infoRef = useRef<HTMLDivElement | null>(null)
  const actionsRef = useRef<HTMLDivElement | null>(null)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e)
    if (!infoRef.current || !actionsRef.current) return
    if (
      !infoRef.current.contains(e.target as Node) &&
      !actionsRef.current.contains(e.target as Node)
    )
      onClose()
  }

  return (
    <Modal
      onClose={onClose}
      className={styles.modal}
      innerElRefs={[infoRef, actionsRef]}
    >
      <Card className={styles.info} ref={infoRef}>
        <Title player={player} showActions={() => setToggle(!toggle)} />
        <div className={styles.tablesBtn}>
          <ActionBtn
            style={{
              backgroundColor:
                selectedTab === 1 ? 'rgba(51,253,217,0.2)' : null,
            }}
            text={'Чат'}
            onClick={() => setSelectedTab(1)}
          />
          <ActionBtn
            style={{
              backgroundColor:
                selectedTab === 2 ? 'rgba(51,253,217,0.2)' : null,
            }}
            text={'Баны'}
            onClick={() => setSelectedTab(2)}
          />
          <ActionBtn
            style={{
              backgroundColor:
                selectedTab === 3 ? 'rgba(51,253,217,0.2)' : null,
            }}
            text={'Тимкиллы'}
            onClick={() => setSelectedTab(3)}
          />
        </div>
        {/*<div className={styles.tablesWrapper}>*/}
        {selectedTab === 1 && <Chat playerSteamId={player.steamId} />}
        {selectedTab === 2 && <Bans playerSteamId={player.steamId} />}
        {selectedTab === 3 && <h1>ТИМКИЛЛЫ</h1>}
        {/*</div>*/}
      </Card>
      {toggle && (
        <Card className={styles.actions} ref={actionsRef}>
          <Actions player={player} />
        </Card>
      )}
    </Modal>
  )
}
