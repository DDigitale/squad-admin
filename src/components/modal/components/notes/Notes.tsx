import React from 'react'
import styles from './Notes.module.scss'
import { NoteRow } from 'components/modal/components/notes/NoteRow'
import { useQuery } from '@tanstack/react-query'
import { fetchPlayerNotes } from 'api/users'
import { Loader } from 'rsuite'

interface Props {
  playerSteamId: string
}

export function Notes({ playerSteamId }: Props) {
  const {
    data: notes,
    isSuccess,
    isLoading,
  } = useQuery(['player', playerSteamId], () => fetchPlayerNotes(playerSteamId))

  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <Loader size="md" center={true} content="загрузка..." vertical />
      )}
      {isSuccess && (
        <>
          {notes.content?.map((note: any) => (
            <NoteRow key={note.id} note={note} playerSteamId={playerSteamId} />
          ))}
        </>
      )}
    </div>
  )
}
