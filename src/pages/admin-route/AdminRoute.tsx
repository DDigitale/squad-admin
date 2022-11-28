import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { fetchAddAdmin, fetchDeactivateAdmin } from 'api/admins'
import styles from 'components/modal/components/title/Title.module.scss'
import backend from 'assets/sound/backend.mp3'
import plus from 'assets/sound/click-plus.wav'
import minus from 'assets/sound/click-minus.wav'

function AdminRoute() {
  const [adminSteamId, setAdminSteamId] = useState(0)

  const addAdminMutation = useMutation(() => fetchAddAdmin(adminSteamId))
  const deactivateAdminMutation = useMutation(() =>
    fetchDeactivateAdmin(adminSteamId)
  )

  const soundClick1 = () => {
    const audio = new Audio()
    audio.src = backend
    audio.play()
  }

  const soundClick2 = () => {
    const audio = new Audio()
    audio.src = plus
    audio.play()
  }

  const soundClick3 = () => {
    const audio = new Audio()
    audio.src = minus
    audio.play()
  }

  const handleChange = (e: any) => {
    setAdminSteamId(e.target.value)
  }

  const handleBackendRestart = (e: any) => {
    soundClick1()
  }

  const handleAddAdmin = (e: any) => {
    soundClick2()
    addAdminMutation.mutate()
  }

  const handleDeactivateAdmin = (e: any) => {
    soundClick3()
    deactivateAdminMutation.mutate()
  }

  return (
    <div
      style={{
        fontFamily: 'fantasy',
        fontSize: '3rem',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          gap: '1rem',
        }}
      >
        <span>Можешь добавить или удалить модератора</span>
        <input type="text" value={adminSteamId} onChange={handleChange} />
        {adminSteamId > 0 && (
          <a
            style={{ fontSize: '3rem', color: 'gold' }}
            className={styles.link}
            href={`http://steamcommunity.com/profiles/${adminSteamId}`}
            target="_blank"
          >
            Проверь перед добавлением! (клик)
          </a>
        )}
        <button onClick={handleAddAdmin}>➕ ДОБАВИТЬ</button>
        <button onClick={handleDeactivateAdmin}>❌ УДАЛИТЬ</button>
      </div>
      <div>
        <button
          style={{
            cursor: 'pointer',
            width: '80vw',
            margin: '3rem',
            backgroundColor: 'greenyellow',
          }}
          onClick={handleBackendRestart}
        >
          СПАСИ ПАНЕЛЬ
          <br />
          ПЕРЕЗАГРУЗИ БЕКЕНД!
          <br />
          <span style={{ fontSize: '2rem' }}>
            (Киллер фича в процессе . . . 🍵)
          </span>
          <br />
          <span style={{ fontSize: '1rem' }}>
            (при нажатии воспроизводится страшный звук)
          </span>
          <br />
          <span style={{ fontSize: '0.75rem' }}>и сверху тоже</span>
        </button>
      </div>
    </div>
  )
}

export default AdminRoute
