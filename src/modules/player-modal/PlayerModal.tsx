import React, { useEffect, useRef, useState } from 'react'
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
import { fetchPlayer, fetchPlayerStatsData } from 'api/users'
import AdminActions from 'components/modal/components/admin-actions/AdminActions'
import { Badge } from 'rsuite'
import { Statistics } from 'components/modal/components/stats/Statistics'
import { Last50 } from 'components/modal/components/last50/Last50'

interface Props {
  playerSteamId: steamId
  onClose: () => void
}

export function PlayerModal({ playerSteamId, onClose }: Props) {
  const { data: player, isSuccess } = useQuery(
    ['player', playerSteamId, 'get-player', 'player-notes'],
    () => fetchPlayer(playerSteamId)
  )

  const {
    data: stata,
    isSuccess: stataIsSuccess,
    isLoading: stataIsLoading,
  } = useQuery(['player', playerSteamId, 'get-player-stata'], () =>
    fetchPlayerStatsData(playerSteamId)
  )

  useEffect(() => {
    isSuccess && (document.title = player.name)
  }, [player])

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
            {stata?.info[0] && (
              <ActionBtn
                style={{
                  backgroundColor:
                    selectedTab === 5 ? 'rgba(51,253,217,0.2)' : null,
                }}
                text={'Статистика'}
                onClick={() => {
                  setSelectedTab(5)
                }}
              />
            )}
            {stata?.lastKills && (
              <ActionBtn
                style={{
                  backgroundColor:
                    selectedTab === 6 ? 'rgba(51,253,217,0.2)' : null,
                }}
                text={'Последние 50 убийств'}
                onClick={() => {
                  setSelectedTab(6)
                }}
              />
            )}
            {stata?.lastDeaths && (
              <ActionBtn
                style={{
                  backgroundColor:
                    selectedTab === 7 ? 'rgba(51,253,217,0.2)' : null,
                }}
                text={'Последние 50 смертей'}
                onClick={() => {
                  setSelectedTab(7)
                }}
              />
            )}
          </div>
          {selectedTab === 1 && <Punishments playerSteamId={playerSteamId} />}
          {selectedTab === 2 && <Chat playerSteamId={playerSteamId} />}
          {selectedTab === 3 && <Notes playerSteamId={playerSteamId} />}
          {selectedTab === 4 && <AdminActions playerSteamId={playerSteamId} />}
          {selectedTab === 5 && (
            <Statistics
              playerSteamId={playerSteamId}
              data={stata}
              isLoading={stataIsLoading}
              isSuccess={stataIsSuccess}
            />
          )}
          {selectedTab === 6 && (
            <Last50
              data={stata?.lastKills}
              isLoading={stataIsLoading}
              isSuccess={stataIsSuccess}
            />
          )}
          {selectedTab === 7 && (
            <Last50
              data={stata?.lastDeaths}
              isLoading={stataIsLoading}
              isSuccess={stataIsSuccess}
            />
          )}
          {selectedTab !== 5 && selectedTab !== 6 && selectedTab !== 7 ? (
            <Actions player={player} />
          ) : null}
        </Card>
      )}
    </Modal>
  )
}
