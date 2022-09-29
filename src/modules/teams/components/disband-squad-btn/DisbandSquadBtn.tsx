import React from 'react'
import styles from './DisbandSquadBtn.module.scss'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { disbandSquad } from 'api/users'

interface Props {
  teamId: number
  squadId: number
  squadName: string
}

export function DisbandSquadBtn({ teamId, squadId, squadName }: Props) {
  const queryClient = useQueryClient()
  const disbandSquadMutation = useMutation(
    () => disbandSquad(teamId, squadId, squadName),
    {
      onSuccess: () => queryClient.invalidateQueries(['players']),
    }
  )

  return (
    <>
      <IoCloseCircleOutline
        onClick={() => disbandSquadMutation.mutate()}
        className={styles.disband}
      />
    </>
  )
}
