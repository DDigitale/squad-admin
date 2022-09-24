import React, { useState } from 'react'
import styles from './Actions.module.scss'
import { ActionBtn } from '../action-btn/ActionBtn'
import { BanForm } from '../../../forms/ban-form/BanForm'
import { KickForm } from '../../../forms/kick-form/KickForm'
import { WarnForm } from '../../../forms/warn-form/WarnForm'
import { TeamChangeForm } from '../../../forms/team-change-form/TeamChangeForm'
import { RemovePlayerFromSquadForm } from '../../../forms/remove-player-from-squad-form/RemovePlayerFromSquadForm'

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
            backgroundColor: selectedTab === 1 ? 'rgba(253,75,76,0.4)' : null,
          }}
          text={'Забанить'}
          onClick={() => setSelectedTab(1)}
        />
        <ActionBtn
          style={{
            backgroundColor: selectedTab === 2 ? 'rgba(253,75,76,0.4)' : null,
          }}
          text={'Кикнуть'}
          onClick={() => setSelectedTab(2)}
        />
        <ActionBtn
          style={{
            backgroundColor: selectedTab === 3 ? 'rgba(253,172,52,0.4)' : null,
          }}
          text={'Сообщение'}
          onClick={() => setSelectedTab(3)}
        />
        <ActionBtn
          style={{
            backgroundColor: selectedTab === 4 ? 'rgba(253,172,52,0.4)' : null,
          }}
          text={'Сменить команду'}
          onClick={() => setSelectedTab(4)}
        />
        <ActionBtn
          style={{
            backgroundColor: selectedTab === 5 ? 'rgba(253,172,52,0.4)' : null,
          }}
          text={'Выгнать из отряда'}
          onClick={() => setSelectedTab(5)}
        />
      </div>
      <div className={styles.actionForms}>
        {selectedTab === 1 && <BanForm steamId={player.steamId} />}
        {selectedTab === 2 && <KickForm steamId={player.steamId} />}
        {selectedTab === 3 && <WarnForm steamId={player.steamId} />}
        {selectedTab === 4 && (
          <TeamChangeForm steamId={player.steamId} name={player.name} />
        )}
        {selectedTab === 5 && (
          <RemovePlayerFromSquadForm
            steamId={player.steamId}
            name={player.name}
          />
        )}
      </div>
    </div>
  )
}
