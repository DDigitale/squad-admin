import React from 'react'
import styles from './Notes.module.scss'
import { NoteRow } from 'components/modal/components/notes/NoteRow'
import { useQuery } from '@tanstack/react-query'
import { fetchPlayerNotes } from 'api/users'

interface Props {
  playerSteamId: string
}

export function Notes({ playerSteamId }: Props) {
  const { data: notes, isSuccess } = useQuery(
    ['players', playerSteamId, 'notes'],
    () => fetchPlayerNotes(playerSteamId)
  )

  return (
    <div className={styles.wrapper}>
      {isSuccess && (
        <>
          {notes.map((note) => (
            <NoteRow key={note.id} note={note} steamId={playerSteamId} />
          ))}
        </>
      )}
    </div>
  )
}
