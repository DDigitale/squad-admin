import React, { useContext, useState } from 'react'
import styles from './SquadItem.module.scss'
import { BiMessageSquareError } from 'react-icons/bi'
import { VscCheck, VscChromeClose, VscLock, VscUnlock } from 'react-icons/vsc'
import { Squad } from 'types/players'
import { PlayerItem } from '../player-item'
import { DisbandSquadBtn } from '../disband-squad-btn'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { warnSquad } from 'api/users'
import toast from 'react-hot-toast'
import { customSelectorStyles } from 'components/forms/SelectorStyles'
import CreatableSelect from 'react-select/creatable'
import { fetchGetRules } from 'api/admins'

interface Props {
  squad: Squad
}

export function SquadItem({ squad }: Props) {
  const queryClient = useQueryClient()
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType

  const [warnReason, setWarnReason] = useState('')

  const colorizeCmdSquad = () => {
    if (squad.name === 'CMD Squad') return 'rgba(255,217,63,0.52)'
  }

  const warnSquadMutation = useMutation(
    () => warnSquad(squad.id, squad.teamId, warnReason),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  const { data: optionsData } = useQuery(['options'], fetchGetRules)

  const squadLeadersOptions = optionsData
    ?.find((group: any) => group.name === 'squadLeadersOptions')
    ?.rules.map((rule: any) => ({
      value: rule.name,
      label: rule.name,
    }))

  const technicalOptions = optionsData
    ?.find((group: any) => group.name === 'technicalOptions')
    ?.rules.map((rule: any) => ({
      value: rule.name,
      label: rule.name,
    }))

  const allPlayersOptions = optionsData
    ?.find((group: any) => group.name === 'allPlayersOptions')
    ?.rules.map((rule: any) => ({
      value: rule.name,
      label: rule.name,
    }))

  const groupedOptions = [
    {
      label: 'Правила для сквадных',
      options: squadLeadersOptions,
    },
    {
      label: 'Правила для техники',
      options: technicalOptions,
    },
    {
      label: 'Правила для всех',
      options: allPlayersOptions,
    },
  ]

  const handleChange = (selectedOption: any) => {
    // const joinValues = selectedOption
    //   .map((val: any) => val.value)
    //   .join(' ')
    //   .toString()
    //
    // console.log(joinValues)
    // setWarnReason(joinValues)

    setWarnReason(selectedOption.value)
  }

  const handleMutate = () => {
    warnSquadMutation.mutate()
    const interval = setInterval(() => warnSquadMutation.mutate(), 10000)
    setTimeout(function () {
      clearInterval(interval)
    }, 20000)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <button
            className={styles.id}
            onClick={() => setPlayerModal(squad.creatorSteam64id)}
            style={{
              backgroundColor: colorizeCmdSquad(),
            }}
            title={squad.creatorName}
          >
            {squad.id}
          </button>
          <span
            className={styles.name}
            style={{
              color: colorizeCmdSquad(),
            }}
          >
            {squad.name}
          </span>
          <div
            className={styles.size}
            style={{
              color: colorizeCmdSquad(),
            }}
          >
            {squad.size}/9
          </div>
          <div
            className={styles.lock}
            style={{
              color: squad.isLocked ? 'rgba(255,114,114,0.7)' : '',
            }}
          >
            {squad.isLocked ? <VscLock /> : <VscUnlock />}
          </div>
          <BiMessageSquareError
            className={styles.warnIcon}
            onClick={() =>
              toast(
                (t) => (
                  <div className={styles.toast}>
                    <span>Сообщение отряду {squad.name}</span>
                    <div className={styles.inputWrapper}>
                      <CreatableSelect
                        options={groupedOptions}
                        onChange={handleChange}
                        styles={customSelectorStyles}
                        placeholder={'Выберите или введите сообщение'}
                        menuPlacement={'top'}
                        className={styles.selector}
                      />
                      <VscCheck
                        className={styles.sendIcon}
                        onClick={handleMutate}
                      />
                      <VscChromeClose
                        className={styles.closeIcon}
                        onClick={() => toast.dismiss(t.id)}
                      />
                    </div>
                  </div>
                ),
                {
                  position: 'top-center',
                  style: {
                    minWidth: '30rem',
                  },
                }
              )
            }
          />
          <span className={styles.disbandIcon}>
            <DisbandSquadBtn
              teamId={squad.teamId}
              squadId={squad.id}
              squadName={squad.name}
            />
          </span>
        </div>
        {squad.players.map((player) => (
          <PlayerItem key={player.id} player={player} />
        ))}
      </div>
    </>
  )
}
