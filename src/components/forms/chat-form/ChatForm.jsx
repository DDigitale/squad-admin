import React from 'react';
import {useSelector} from "react-redux";
import {selectPlayerMessagesList} from "store/slices/get-players/getPlayerMessages";


export function ChatForm({steamId}) {
	const messages = useSelector((state) => selectPlayerMessagesList(state))
	console.log('mes',messages)

	return (
		<div>
			asd

		</div>
	);
}
