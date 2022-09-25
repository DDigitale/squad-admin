import React, { useRef, useState } from 'react'
import styles from './PlayerModal.module.scss'
import { steamId } from 'types/players'
import { Card, Modal } from 'components'
import { ActionBtn, Actions, Bans, Chat, Title } from 'components/modal'

interface Props {
  playerSteamId: steamId
  onClose: () => void
}

export function PlayerModal({ playerSteamId, onClose }: Props) {
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
        <Title
          player={null as unknown as any}
          showActions={() => setToggle(!toggle)}
        />
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
        {selectedTab === 1 && <Chat playerSteamId={playerSteamId} />}
        {selectedTab === 2 && <Bans playerSteamId={playerSteamId} />}
        {selectedTab === 3 && <h1>ТИМКИЛЛЫ</h1>}
        {/*</div>*/}
      </Card>
      {toggle && (
        <Card className={styles.actions} ref={actionsRef}>
          <Actions player={playerSteamId} />
        </Card>
      )}
    </Modal>
  )
}
