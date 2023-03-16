import React, { useContext, useState } from 'react'
import styles from './BanOffline.module.scss'
import { useMutation } from '@tanstack/react-query'
import { fetchAddPlayer } from 'api/users'
import { IconButton } from 'rsuite'
import UserInfoIcon from '@rsuite/icons/UserInfo'
import PlusIcon from '@rsuite/icons/Plus'
import { PlayerModalContext, PlayerModalContextType } from 'contexts'
import { Link, useLocation } from 'react-router-dom'

function BanOffline() {
  const [playerModal, setPlayerModal] = useContext(
    PlayerModalContext
  ) as PlayerModalContextType
  const [loading, setLoading] = useState(false)
  const [steamId, setSteamId] = useState('')
  const [player, setPlayer] = useState<any | null>(null)

  const addPlayerMutation = useMutation(() => fetchAddPlayer(steamId), {
    onSuccess: (data) => setPlayer(data),
    onMutate: () => setLoading(true),
    onSettled: () => setLoading(false),
    onError: () => {
      setLoading(false)
      setPlayer(null)
    },
  })

  const location = useLocation()

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Введите steamId"
        maxLength={17}
        onChange={(e: any) => setSteamId(e.target.value.toString())}
      />
      <IconButton
        loading={loading}
        disabled={steamId.length < 16}
        icon={<PlusIcon />}
        size="sm"
        onClick={() => addPlayerMutation.mutate()}
      >
        Добавить в бд
      </IconButton>
      <Link
        style={{ textDecoration: 'none' }}
        to={`/player/${player?.steamId}`}
        state={{ background: location }}
      >
        <IconButton
          disabled={!player}
          icon={<UserInfoIcon />}
          size="sm"
          onClick={() => setPlayerModal(player.steamId.toString())}
        />
      </Link>
    </div>
  )
}

export default BanOffline
