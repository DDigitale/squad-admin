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
import playerModalSoundDD from 'assets/sound/player-modal-dd.wav'
import playerModalSoundBR from 'assets/sound/player-modal-br.mp3'
import playerModalSoundVS from 'assets/sound/player-modal-vs.wav'
import playerModalSoundRS from 'assets/sound/player-modal-rs.wav'

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

  const soundClickDD = () => {
    const audio = new Audio()
    audio.src = playerModalSoundDD
    audio.play()
  }

  const soundClickBR = () => {
    const audio = new Audio()
    audio.src = playerModalSoundBR
    audio.play()
  }

  const soundClickVS = () => {
    const audio = new Audio()
    audio.src = playerModalSoundVS
    audio.play()
  }

  const soundClickRS = () => {
    const audio = new Audio()
    audio.src = playerModalSoundRS
    audio.play()
  }

  if (playerSteamId === '76561198054690038') {
    player && soundClickDD()
  }

  if (playerSteamId === '76561198017819600') {
    player && soundClickBR()
  }

  if (playerSteamId === '76561198069397368') {
    player && soundClickVS()
  }

  if (playerSteamId === '76561198114468080') {
    player && soundClickRS()
  }

  return (
    <Modal onClose={onClose} className={styles.modal} innerElRefs={[infoRef]}>
      {isSuccess && (
        <Card className={styles.info} ref={infoRef}>
          <Title player={player} />
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
