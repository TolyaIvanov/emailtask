import React from 'react';

import {
	changeInputValue,
	changeTextareaHeight
} from "./actionCreator";

export const handleTextareaHeight = (el) => {
	return (dispatch) => {
		let splittedValue = el.value.replace(/[<>]/g, '_').split("\n");
		let text = [];

		splittedValue.map((str) => {
			text.push(<div>{str.replace(/\s\s/g, '&nbsp;')}&nbsp;</div>);

			return text;
		});

		dispatch(changeTextareaHeight(el.value, text));
	}
};