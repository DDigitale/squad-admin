import React, { useRef, useState } from 'react'
import styles from './PlayerModal.module.scss'
import btnStyles from '../../components/modal/components/action-btn/ActionBtn.module.scss'
import { steamId } from 'types/players'
import { Card, Modal } from 'components'
import {
  ActionBtn,
  Actions,
  Punishments,
  Chat,
  Notes,
  Title,
} from 'components/modal'
import { useQuery } from '@tanstack/react-query'
import { fetchPlayer } from 'api/users'

interface Props {
  playerSteamId: steamId
  onClose: () => void
}

export function PlayerModal({ playerSteamId, onClose }: Props) {
  const {
    data: player,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(['player', playerSteamId, 'get-player'], () =>
    fetchPlayer(playerSteamId)
  )

  const [toggle, setToggle] = useState(false)
  const [selectedTab, setSelectedTab] = useState(1)
  const [activeBtn, setActiveBtn] = useState(false)

  const infoRef = useRef<HTMLDivElement | null>(null)
  const actionsRef = useRef<HTMLDivElement | null>(null)

  // const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
  //   console.log(e)
  //   if (!infoRef.current || !actionsRef.current) return
  //   if (
  //     !infoRef.current.contains(e.target as Node) &&
  //     !actionsRef.current.contains(e.target as Node)
  //   )
  //     onClose()
  // }

  return (
    <Modal
      onClose={onClose}
      className={styles.modal}
      innerElRefs={[infoRef, actionsRef]}
    >
      {isSuccess && (
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
              text={'Наказания'}
              onClick={() => setSelectedTab(2)}
            />
            <ActionBtn
              style={{
                backgroundColor:
                  selectedTab === 3 ? 'rgba(51,253,217,0.2)' : null,
              }}
              text={'Заметки'}
              onClick={() => {
                setSelectedTab(3)
              }}
            />
          </div>
          {selectedTab === 1 && <Chat playerSteamId={playerSteamId} />}
          {selectedTab === 2 && <Punishments playerSteamId={playerSteamId} />}
          {selectedTab === 3 && <Notes playerSteamId={playerSteamId} />}
        </Card>
      )}

      {toggle && (
        <Card className={styles.actions} ref={actionsRef}>
          <Actions player={player} />
        </Card>
      )}
    </Modal>
  )
}
