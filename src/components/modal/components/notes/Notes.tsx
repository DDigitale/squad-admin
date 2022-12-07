import React from 'react'
import styles from './Notes.module.scss'
import { NoteRow } from 'components/modal/components/notes/NoteRow'
import { useQuery } from '@tanstack/react-query'
import { fetchPlayerNotes } from 'api/users'
import { Spinner } from 'components/spinner/Spinner'

interface Props {
  playerSteamId: string
}

export function Notes({ playerSteamId }: Props) {
  const {
    data: notes,
    isSuccess,
    isLoading,
  } = useQuery(['player-notes', playerSteamId], () =>
    fetchPlayerNotes(playerSteamId)
  )

  return (
    <div className={styles.wrapper}>
      {isLoading && <Spinner />}
      {isSuccess && (
        <>
          {notes.content?.map((note: any) => (
            <NoteRow key={note.id} note={note} />
          ))}
        </>
      )}
    </div>
  )
}
