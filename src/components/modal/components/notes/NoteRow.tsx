import React from 'react'
import styles from './NoteRow.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deletePlayerNote } from 'api/users'
import { IoCloseCircleOutline } from 'react-icons/io5'

interface Props {
  note: any
  steamId: string
}

export function NoteRow({ note, steamId }: Props) {
  const queryClient = useQueryClient()
  const deletePlayerNoteMutation = useMutation(
    () => deletePlayerNote(note.id, steamId),
    {
      onSuccess: () => queryClient.invalidateQueries(['player-notes']),
    }
  )

  const time = new Date(Date.parse(note.creationTime)).toLocaleString('ru')

  return (
    <div className={styles.row}>
      <span className={styles.time}>{time}</span>
      <span style={{ whiteSpace: 'nowrap' }}>{note.adminsBySteamId.name}:</span>
      <span className={styles.message}>{note.note}</span>
      <span
        className={styles.delete}
        onClick={() => deletePlayerNoteMutation.mutate()}
      >
        <IoCloseCircleOutline />
      </span>
    </div>
  )
}
