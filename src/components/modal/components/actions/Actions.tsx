import React, { useState } from 'react'
import styles from './Actions.module.scss'
import { ActionBtn } from '../action-btn/ActionBtn'
import { BanForm } from 'components/forms'
import { KickForm } from 'components/forms'
import { WarnForm } from 'components/forms'
import { TeamChangeForm } from 'components/forms'
import { RemovePlayerFromSquadForm } from 'components/forms'
import { NoteForm } from 'components/forms/note-form/NoteForm'

interface Props {
  player: any
}

export function Actions({ player }: Props) {
  const [selectedTab, setSelectedTab] = useState(1)

  return (
    <div className={styles.wrapper}>
      <div className={styles.actionBtns}>
        <ActionBtn
          style={{
            backgroundColor: selectedTab === 1 ? 'rgba(51,253,217,0.2)' : null,
          }}
          text={'Забанить'}
          onClick={() => setSelectedTab(1)}
        />
        <ActionBtn
          style={{
            backgroundColor: selectedTab === 2 ? 'rgba(51,253,217,0.2)' : null,
          }}
          text={'Кикнуть'}
          onClick={() => setSelectedTab(2)}
        />
        <ActionBtn
          style={{
            backgroundColor: selectedTab === 3 ? 'rgba(51,253,217,0.2)' : null,
          }}
          text={'Сообщение'}
          onClick={() => setSelectedTab(3)}
        />
        <ActionBtn
          style={{
            backgroundColor: selectedTab === 4 ? 'rgba(51,253,217,0.2)' : null,
          }}
          text={'Сменить команду'}
          onClick={() => setSelectedTab(4)}
        />
        <ActionBtn
          style={{
            backgroundColor: selectedTab === 5 ? 'rgba(51,253,217,0.2)' : null,
          }}
          text={'Выгнать из отряда'}
          onClick={() => setSelectedTab(5)}
        />
        <ActionBtn
          style={{
            backgroundColor: selectedTab === 6 ? 'rgba(51,253,217,0.2)' : null,
          }}
          text={'Добавить заметку'}
          onClick={() => setSelectedTab(6)}
        />
      </div>
      <div className={styles.actionForms}>
        {selectedTab === 1 && (
          <BanForm steamId={player.steamId} name={player.name} />
        )}
        {selectedTab === 2 && (
          <KickForm steamId={player.steamId} name={player.name} />
        )}
        {selectedTab === 3 && (
          <WarnForm steamId={player.steamId} name={player.name} />
        )}
        {selectedTab === 4 && (
          <TeamChangeForm steamId={player.steamId} name={player.name} />
        )}
        {selectedTab === 5 && (
          <RemovePlayerFromSquadForm
            steamId={player.steamId}
            name={player.name}
          />
        )}
        {selectedTab === 6 && <NoteForm steamId={player.steamId} />}
      </div>
    </div>
  )
}
