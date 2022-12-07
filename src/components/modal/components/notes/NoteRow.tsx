import React from 'react'
import styles from './NoteRow.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deletePlayerNote } from 'api/users'
import { IoCloseCircleOutline } from 'react-icons/io5'

interface Props {
  note: any
}

export function NoteRow({ note }: Props) {
  const queryClient = useQueryClient()
  const deletePlayerNoteMutation = useMutation(
    () => deletePlayerNote(note.id, note.adminSteamId),
    {
      onSuccess: () => queryClient.invalidateQueries(['player-notes']),
    }
  )

  const time = new Date(Date.parse(note.createTime)).toLocaleString('ru')

  return (
    <div className={styles.row}>
      <span className={styles.time}>{time}</span>
      <span style={{ whiteSpace: 'nowrap' }}>{note.adminName}:</span>
      <span className={styles.message}>{note.note}</span>
      {!note.note.includes('игрока') && (
        <span
          className={styles.delete}
          onClick={() => deletePlayerNoteMutation.mutate()}
        >
          <IoCloseCircleOutline />
        </span>
      )}
    </div>
  )
}
