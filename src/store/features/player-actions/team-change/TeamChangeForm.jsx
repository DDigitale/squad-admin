import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {kickPlayerRequest, selectKickPlayers} from "../kick/kickSlice";
import {kickReasonText} from "../../../../config/actions-text";
import {teamChangePlayerRequest} from "./teamChangeSlice";

export function TeamChangeForm(props) {
	const {steam64id, closeModal, name} = props
	const dispatch = useDispatch();
	const {isLoading, isSuccess, isError} = useSelector(selectKickPlayers)

	const teamChangePlayerHandler = () => {
		dispatch(teamChangePlayerRequest(steam64id))
	}

	return <div>
		<p>
			Сменить команду игроку {name}?
		</p>
		<button className="action-btn" onClick={teamChangePlayerHandler}>СМЕНИТЬ</button>
	</div>
}
