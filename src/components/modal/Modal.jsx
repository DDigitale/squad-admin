import React, { useEffect, useState } from 'react'
import styles from './Modal.module.scss'
import { BanForm } from 'components/forms/BanForm'
import { KickForm } from 'components/forms/KickForm'
import { WarnForm } from 'components/forms/WarnForm'
import { TeamChangeForm } from 'components/forms/TeamChangeForm'
import { RemovePlayerFromSquadForm } from 'components/forms/RemovePlayerFromSquadForm'
import { useDispatch, useSelector } from 'react-redux'
import {
  hideModal,
  selectPlayersModalInfo,
} from 'store/slices/modal/modalSlice'
import { VscChromeClose } from 'react-icons/vsc'
import { ActionBtn } from 'components/modal/components/ActionBtn'
import { createPortal } from 'react-dom'

export function Modal({ children }) {
  const modalRoot = document.getElementById('modalRoot')

  const dispatch = useDispatch()
  // const modalState = useSelector(selectPlayersModalInfo)
  // const [selectedTab, setSelectedTab] = useState(0)
  // const [player, setPlayer] = useState(null)
  // useEffect(() => {}, [])

  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.modal}>{children}</div>
    </div>,
    modalRoot
  )

  // return (
  //   <>
  //     <div className={styles.wrapper} onClick={() => dispatch(hideModal())}>
  //       <div className={styles.content} onClick={(e) => e.stopPropagation()}>
  //         <div className={styles.title}>
  //           <img
  //             className={styles.avatar}
  //             src={require('assets/img/modal-avatar.png')}
  //             alt=""
  //           />
  //           <div className={styles.info}>
  //             <p className={styles.name}>{modalState.name}</p>
  //             <a
  //               className={styles.link}
  //               href={`http://steamcommunity.com/profiles/${modalState.steamId}`}
  //               target="_blank"
  //             >
  //               ID: {modalState.steamId}
  //             </a>
  //           </div>
  //           <VscChromeClose
  //             className={styles.close}
  //             onClick={() => dispatch(hideModal())}
  //           />
  //         </div>
  //         <div className={styles.actionsBtns}>
  //           <ActionBtn text={'Забанить'} onClick={() => setSelectedTab(1)} />
  //           <ActionBtn text={'Кикнуть'} onClick={() => setSelectedTab(2)} />
  //           <ActionBtn
  //             text={'Предупреждение'}
  //             onClick={() => setSelectedTab(3)}
  //           />
  //           <ActionBtn
  //             text={'Сменить команду'}
  //             onClick={() => setSelectedTab(4)}
  //           />
  //           <ActionBtn
  //             text={'Выгнать из отряда'}
  //             onClick={() => setSelectedTab(5)}
  //           />
  //           <ActionBtn
  //             text={'История банов'}
  //             onClick={() => setSelectedTab(6)}
  //           />
  //           <ActionBtn
  //             text={'История тимкиллов'}
  //             onClick={() => setSelectedTab(7)}
  //           />
  //           <ActionBtn
  //             text={'История чата'}
  //             onClick={() => setSelectedTab(8)}
  //           />
  //         </div>
  //         <div className={styles.actionsForm}>
  //           {selectedTab === 1 && (
  //             <BanForm steamId={modalState.steamId} name={modalState.name} />
  //           )}
  //           {selectedTab === 2 && (
  //             <KickForm steamId={modalState.steamId} name={modalState.name} />
  //           )}
  //           {selectedTab === 3 && (
  //             <WarnForm steamId={modalState.steamId} name={modalState.name} />
  //           )}
  //           {selectedTab === 4 && (
  //             <TeamChangeForm
  //               steamId={modalState.steamId}
  //               name={modalState.name}
  //             />
  //           )}
  //           {selectedTab === 5 && (
  //             <RemovePlayerFromSquadForm
  //               steamId={modalState.steamId}
  //               name={modalState.name}
  //             />
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // )
}
