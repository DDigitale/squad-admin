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
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <>
      <div className={styles.actionsBtns}>
        <ActionBtn text={'Забанить'} onClick={() => setSelectedTab(1)} />
        <ActionBtn text={'Кикнуть'} onClick={() => setSelectedTab(2)} />
        <ActionBtn text={'Предупреждение'} onClick={() => setSelectedTab(3)} />
        <ActionBtn text={'Сменить команду'} onClick={() => setSelectedTab(4)} />
        <ActionBtn
          text={'Выгнать из отряда'}
          onClick={() => setSelectedTab(5)}
        />
      </div>
      <div className={styles.actionsForm}>
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
    </>
  )
}
