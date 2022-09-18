import React, { useState } from 'react'
import { BanForm } from '../store/features/player-actions/ban/BanForm'
import { KickForm } from '../store/features/player-actions/kick/KickForm'
import { WarnForm } from '../store/features/player-actions/warn/WarnForm'
import { TeamChangeForm } from '../store/features/player-actions/team-change/TeamChangeForm'
import { RemovePlayerFromSquadForm } from '../store/features/player-actions/remove-player-from-squad/RemovePlayerFromSquadForm'
import { useDispatch, useSelector } from 'react-redux'
import {
  hideModal,
  selectPlayersModalInfo,
} from '../store/features/modal/modalSlice'
import { VscChromeClose } from 'react-icons/vsc'

export function ModalPlayerItem() {
  const dispatch = useDispatch()
  const modalState = useSelector(selectPlayersModalInfo)
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <>
      <div
        className="modal-player-wrapper"
        onClick={() => dispatch(hideModal())}
      >
        <div
          className="modal-player-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-player-title">
            <img src={require('../assets/img/modal-avatar.png')} alt="" />
            <div className="modal-player-info">
              <p>{modalState.name}</p>
              <a
                href={`http://steamcommunity.com/profiles/${modalState.steam64id}`}
                target="_blank"
              >
                ID: {modalState.steam64id}
              </a>
            </div>
            <VscChromeClose
              className="modal-close"
              onClick={() => dispatch(hideModal())}
            />
          </div>
          <div className="modal-player-actions-wrapper">
            <div className="modal-player-actions-btns">
              <button
                className="modal-player-actions-btn"
                onClick={() => setSelectedTab(1)}
              >
                Забанить
              </button>
              <button
                className="modal-player-actions-btn"
                onClick={() => setSelectedTab(2)}
              >
                Кикнуть
              </button>
              <button
                className="modal-player-actions-btn"
                onClick={() => setSelectedTab(3)}
              >
                Предупреждение
              </button>
              <button
                className="modal-player-actions-btn"
                onClick={() => setSelectedTab(4)}
              >
                Сменить команду
              </button>
              <button
                className="modal-player-actions-btn"
                onClick={() => setSelectedTab(5)}
              >
                Выгнать из отряда
              </button>
              <button
                className="modal-player-actions-btn"
                onClick={() => setSelectedTab(6)}
              >
                История банов
              </button>
              <button
                className="modal-player-actions-btn"
                onClick={() => setSelectedTab(7)}
              >
                История тимкиллов
              </button>
              <button
                className="modal-player-actions-btn"
                onClick={() => setSelectedTab(8)}
              >
                История чата
              </button>
            </div>
            <div className="modal-player-actions-form">
              {selectedTab === 1 && (
                <BanForm
                  steam64id={modalState.steam64id}
                  name={modalState.name}
                />
              )}
              {selectedTab === 2 && (
                <KickForm
                  steam64id={modalState.steam64id}
                  name={modalState.name}
                />
              )}
              {selectedTab === 3 && (
                <WarnForm
                  steam64id={modalState.steam64id}
                  name={modalState.name}
                />
              )}
              {selectedTab === 4 && (
                <TeamChangeForm
                  steam64id={modalState.steam64id}
                  name={modalState.name}
                />
              )}
              {selectedTab === 5 && (
                <RemovePlayerFromSquadForm
                  steam64id={modalState.steam64id}
                  name={modalState.name}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
