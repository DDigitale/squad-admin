import React, { useEffect, useState } from 'react'
import styles from './Title.module.scss'
import { RiErrorWarningFill } from 'react-icons/ri'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPlayerOnControl, removePlayerOnControl } from 'api/users'

interface Props {
  player: any
  refetch: () => void
}

export function Title({ player, refetch }: Props) {
  const queryClient = useQueryClient()
  const [kitImg, setKitImg] = useState<string | null>(null)

  const addPlayerOnControlMutation = useMutation(
    () => addPlayerOnControl(player.steamId),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  const removePlayerOnControlMutation = useMutation(
    () => removePlayerOnControl(player.steamId),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  useEffect(() => {
    const getImg = async () => {
      if (player.isOnline) {
        const { default: kitImg } = await import(
          `assets/img/kits/${player.isOnline?.role.split('_')[1]}.svg`
        )
        setKitImg(kitImg)
      }
    }
    getImg()
  }, [player.isOnline?.role])

  const onControlHandler = () => {
    player.isOnControl
      ? removePlayerOnControlMutation.mutate(undefined, {
          onSuccess: () => refetch(),
        })
      : addPlayerOnControlMutation.mutate(undefined, {
          onSuccess: () => refetch(),
        })
  }

  return (
    <div
      className={styles.title}
      style={{
        backgroundColor:
          player.numOfActiveBans > 0
            ? 'rgba(253,75,76,0.31)'
            : '#3c3f41' && player.isOnline && 'rgba(53,153,70,0.31)',
      }}
    >
      <div className={styles.container}>
        <img className={styles.avatar} src={player.avatarFull} alt="" />
        <div className={styles.info}>
          <span
            className={styles.name}
            style={{ color: player.isAdmin ? 'rgba(251,211,1,0.7)' : '' }}
          >
            {kitImg && <img src={kitImg} alt={player.role} />}
            {player.isOnline?.name || player.name}
            <RiErrorWarningFill
              className={`${styles.controlIcon} ${
                player.isOnControl && styles.onControl
              }`}
              style={{ marginLeft: '0.5rem' }}
              onClick={onControlHandler}
            />
          </span>
          {player.isOnline ? (
            <>
              <span>
                В команде {player.isOnline?.teamId}{' '}
                {player.isOnline?.squadID > 0
                  ? `в отряде ${player.isOnline?.squadID}`
                  : 'без отряда'}
              </span>
            </>
          ) : (
            <span>
              {player.numOfActiveBans ? 'Игрок забанен' : 'Игрок оффлайн'}
            </span>
          )}
          <div className={styles.steamLink}>
            <a
              className={styles.link}
              href={`http://steamcommunity.com/profiles/${player.steamId}`}
              target="_blank"
            >
              {player.steamId}
            </a>
            {/*<TbCopy*/}
            {/*  className={styles.copy}*/}
            {/*  onClick={async () =>*/}
            {/*    await navigator['clipboard'].writeText(`${player.steamId}`)*/}
            {/*  }*/}
            {/*/>*/}
          </div>
        </div>
      </div>
    </div>
  )
}
