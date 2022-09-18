import React, { useState } from 'react'
import { SearchPlayer } from '../components/left-section/SearchPlayer'
import Header from '../components/Header'
import DisconnectedPlayers from '../components/right-section/disconnected-players/DisconnectedPlayers'
import { PlayersList } from '../components/mid-section/players-list/PlayersList'
import { useDispatch, useSelector } from 'react-redux'
import { ModalPlayerItem } from '../components/ModalPlayerItem'
import { AdminLogs } from '../components/mid-section/admin-logs/AdminLogs'
import { BansList } from '../components/mid-section/bans-list/BansList'
import { ChatList } from '../components/mid-section/chat-list/ChatList'
import { AdminsList } from '../components/mid-section/admins-list/AdminsList'
import { TeamkillsList } from '../components/mid-section/teamkills-list/TeamkillsList'
import AllPlayers from '../components/mid-section/all-players/AllPlayers'
import { ServerInfo } from '../components/mid-section/server-info/ServerInfo'
import { MapSelector } from '../components/right-section/map-selector/MapSelector'
import { SuspectedPlayers } from '../components/right-section/suspected-players/SuspectedPlayers'
import { hideModal } from '../store/features/modal/modalSlice'

export function Home() {
  const dispatch = useDispatch()
  const [selectedTab, setSelectedTab] = useState(0)
  const { showPlayerItemModal } = useSelector((state) => state.modalState)

  return (
    <>
      <div className="home">
        {/*<Header/>*/}
        {showPlayerItemModal && <ModalPlayerItem />}
        <div className="main-container">
          <section className="left-section">
            <SearchPlayer />
            <SearchPlayer />
            <SearchPlayer />
          </section>
          <section className="mid-section">
            {/*<div>*/}
            {/*	<button onClick={() => setSelectedTab(0)}>Игроки на сервере</button>*/}
            {/*	<button onClick={() => setSelectedTab(1)}>Все игроки</button>*/}
            {/*	<button onClick={() => setSelectedTab(2)}>Админы</button>*/}
            {/*	<button onClick={() => setSelectedTab(3)}>Журнал</button>*/}
            {/*	<button onClick={() => setSelectedTab(4)}>Баны</button>*/}
            {/*	<button onClick={() => setSelectedTab(5)}>Тимкиллы</button>*/}
            {/*	<button onClick={() => setSelectedTab(6)}>Чат</button>*/}
            {/*</div>*/}
            <ServerInfo />
            {selectedTab === 0 && <PlayersList />}
            {/*{selectedTab === 1 && <AllPlayers/>}*/}
            {/*{selectedTab === 2 && <AdminsList/>}*/}
            {/*{selectedTab === 3 && <AdminLogs/>}*/}
            {/*{selectedTab === 4 && <BansList/>}*/}
            {/*{selectedTab === 5 && <TeamkillsList/>}*/}
            {/*{selectedTab === 6 && <ChatList/>}*/}
          </section>
          <section className="right-section">
            <MapSelector />
            {/*<SuspectedPlayers/>*/}
            <DisconnectedPlayers />
          </section>
        </div>
      </div>
    </>
  )
}
