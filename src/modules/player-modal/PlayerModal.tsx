import React, { useRef, useState } from 'react'
import styles from './PlayerModal.module.scss'
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
    isSuccess,
    refetch,
  } = useQuery(['player', playerSteamId, 'get-player'], () =>
    fetchPlayer(playerSteamId)
  )

  const [selectedTab, setSelectedTab] = useState(1)

  const infoRef = useRef<HTMLDivElement | null>(null)

  return (
    <Modal onClose={onClose} className={styles.modal} innerElRefs={[infoRef]}>
      {isSuccess && (
        <Card className={styles.info} ref={infoRef}>
          <Title player={player} refetch={refetch} />
          <div className={styles.tablesBtn}>
            <ActionBtn
              style={{
                backgroundColor:
                  selectedTab === 1 ? 'rgba(51,253,217,0.2)' : null,
              }}
              text={'Наказания'}
              onClick={() => setSelectedTab(1)}
            />
            <ActionBtn
              style={{
                backgroundColor:
                  selectedTab === 2 ? 'rgba(51,253,217,0.2)' : null,
              }}
              text={'Чат'}
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

          {selectedTab === 1 && <Punishments playerSteamId={playerSteamId} />}
          {selectedTab === 2 && <Chat playerSteamId={playerSteamId} />}
          {selectedTab === 3 && <Notes playerSteamId={playerSteamId} />}
          <Actions player={player} />
        </Card>
      )}
    </Modal>
  )
}
