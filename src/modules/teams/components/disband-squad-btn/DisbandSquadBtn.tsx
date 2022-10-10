import React from 'react'
import styles from './DisbandSquadBtn.module.scss'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { disbandSquad } from 'api/users'
import toast from 'react-hot-toast'

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
        onClick={() =>
          toast(
            (t) => (
              <div className={styles.toast}>
                <span>
                  {' '}
                  Расформировать отряд {squadId}:<br />"{squadName}" ?
                </span>
                <button
                  className={styles.confirm}
                  onClick={() => {
                    disbandSquadMutation.mutate()
                    toast.dismiss(t.id)
                  }}
                >
                  ДА
                </button>
                <button
                  className={styles.dismiss}
                  onClick={() => toast.dismiss(t.id)}
                >
                  НЕТ
                </button>
              </div>
            ),
            {
              position: 'top-center',
              style: {},
            }
          )
        }
        className={styles.disband}
      />
    </>
  )
}
