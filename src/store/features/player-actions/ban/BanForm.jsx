import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {banLengthText, banReasonText} from "../../../../config/actions-text";
import {banPlayerRequest, selectBanPlayers} from "./banSlice";

export function BanForm(props) {
	const {steam64id} = props
	const dispatch = useDispatch();
	const {isLoading, isSuccess, isError} = useSelector(selectBanPlayers)
	const [banReason, setBanReason] = useState(banReasonText[0].text);
	const [banLength, setBanLength] = useState(banLengthText[0].blength);

	const reasonOptions = banReasonText.map(i => {
		return <option className="select-options-active" key={i.id} value={i.text}>{i.text}</option>
	})

	const lengthOptions = banLengthText.map(i => {
		return <option className="select-options-active" key={i.id} value={i.blength}>{i.blength}</option>
	})

	const banPlayerHandler = () => {
		dispatch(banPlayerRequest({banReason, banLength, id: steam64id}))
	}

	return <div>
		<div>
			<p>Причина бана:</p>
			<select className="select-options" value={banReason} onChange={(e) => setBanReason(e.target.value)}>
				{reasonOptions}
			</select>
			<p>Срок бана:</p>
			<select className="select-options" value={banLength} onChange={(e) => setBanLength(e.target.value)}>
				{lengthOptions}
			</select>
		</div>
		<button className="action-btn" onClick={banPlayerHandler}>ЗАБАНИТЬ</button>
	</div>
}
