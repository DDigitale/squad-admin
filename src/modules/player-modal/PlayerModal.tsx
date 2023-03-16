import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
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
import AdminActions from 'components/modal/components/admin-actions/AdminActions'
import { Badge } from 'rsuite'

interface Props {
  playerSteamId: steamId
  onClose: () => void
}

export function PlayerModal({ playerSteamId, onClose }: Props) {
  const { data: player, isSuccess } = useQuery(
    ['player', playerSteamId, 'get-player', 'player-notes'],
    () => fetchPlayer(playerSteamId)
  )

  // useEffect(() => {
  //   isSuccess && (document.title = player.name)
  // }, [player])

  const [selectedTab, setSelectedTab] = useState(1)

  const infoRef = useRef<HTMLDivElement | null>(null)

  return (
    <Modal onClose={onClose} className={styles.modal} innerElRefs={[infoRef]}>
      {isSuccess && (
        <Card className={styles.info} ref={infoRef}>
          <Title player={player} />
          <div className={styles.tablesBtn}>
            <Badge
              color="red"
              content={
                player.numOfPunishments > 0 ? player.numOfPunishments : false
              }
              maxCount={999}
            >
              <ActionBtn
                style={{
                  backgroundColor:
                    selectedTab === 1 ? 'rgba(51,253,217,0.2)' : null,
                }}
                text={'Наказания'}
                onClick={() => setSelectedTab(1)}
              />
            </Badge>
            <Badge
              color="green"
              content={player.numOfMessages > 0 ? player.numOfMessages : false}
              maxCount={999}
            >
              <ActionBtn
                style={{
                  backgroundColor:
                    selectedTab === 2 ? 'rgba(51,253,217,0.2)' : null,
                }}
                text={'Чат'}
                onClick={() => setSelectedTab(2)}
              />
            </Badge>
            <Badge
              color="cyan"
              content={player.numOfNotes > 0 ? player.numOfNotes : false}
              maxCount={999}
            >
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
            </Badge>
            <Badge
              color="blue"
              content={
                player.numOfAdminActions > 0 ? player.numOfAdminActions : false
              }
              maxCount={999}
            >
              <ActionBtn
                style={{
                  backgroundColor:
                    selectedTab === 4 ? 'rgba(51,253,217,0.2)' : null,
                }}
                text={'Действия админов'}
                onClick={() => {
                  setSelectedTab(4)
                }}
              />
            </Badge>
          </div>

          {selectedTab === 1 && <Punishments playerSteamId={playerSteamId} />}
          {selectedTab === 2 && <Chat playerSteamId={playerSteamId} />}
          {selectedTab === 3 && <Notes playerSteamId={playerSteamId} />}
          {selectedTab === 4 && <AdminActions playerSteamId={playerSteamId} />}
          <Actions player={player} />
        </Card>
      )}
    </Modal>
  )
}
