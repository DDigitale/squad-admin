import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectSearch,
  setSearch,
} from '../../store/features/player-actions/search-players/searchPlayerSlice'
import {
  selectPlayers,
  selectPlayersInfo,
} from '../../store/features/get-players/getPlayersSlice'
import { showModal } from '../../store/features/modal/modalSlice'

export function SearchPlayer() {
  const dispatch = useDispatch()
  const search = useSelector(selectSearch)
  const players = useSelector((state) => selectPlayers(state))
  let allPlayers = players?.teams
    ?.map((team) =>
      team.squads.map((squad) => squad.players.map((player) => player))
    )
    .flat(2)

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value))
  }

  return (
    <div className="search-players-wrapper">
      <input
        className="search-players-input"
        placeholder="поиск игрока"
        onChange={handleSearch}
        value={search}
      />
      <>
        <div className="search-players-list">
          {search ? (
            allPlayers
              .filter((player) => player.name.toLowerCase().includes(search))
              .map((player) => (
                <div
                  key={player.name}
                  className="search-player-item"
                  onClick={() => dispatch(showModal({ player }))}
                >
                  <p className="search-player-name">{player.name}</p>
                </div>
              ))
          ) : (
            <></>
          )}
        </div>
      </>
    </div>
  )
}
