import React, { useState } from 'react'
import styles from './NoteForm.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { notePlayer } from 'api/users'
import { successToast } from 'utils/toasts'

interface Props {
  steamId: string
}

export function NoteForm({ steamId }: Props) {
  const queryClient = useQueryClient()
  const [note, setNote] = useState('')

  const notePlayerMutation = useMutation(() => notePlayer(steamId, note), {
    onSuccess: () => queryClient.invalidateQueries(['player']),
  })

  const handleNote = (e: any) => {
    setNote(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Введите заметку"
        maxLength={100}
        onChange={handleNote}
        value={note}
      />
      <button
        className={styles.button}
        onClick={() => notePlayerMutation.mutate()}
      >
        Добавить
      </button>
    </div>
  )
}
