import React from 'react';
import {SquadItem} from "./SquadItem";
import {PlayersWithoutSquad} from "./PlayersWithoutSquad";

export function TeamItem({team}) {

	return <>
		<div className='teams-container'>
			<div className="flag-container">
				<div className="teams-container-flag-wrapper">
					<div className="teams-container-flag-vline"></div>
					<img src={require('../../../assets/img/flag_rus.png')} alt=""/>
					<p>Россия</p>
				</div>
				<div className='teams-title'>
					{team.teamName}
				</div>
			</div>
			{team.squads.map(squad =>
				<div key={squad.id} className="squads-wrapper">
					<SquadItem key={squad.id} squad={squad} team={team}/>
				</div>
			)}
			<div className='pws-title'>
				Игроки без отряда
			</div>
			{team.playersWithoutSquad.map(pws =>
				<PlayersWithoutSquad key={pws.id} pws={pws}/>
			)}
		</div>
	</>
}
