import {
	changeInputValue,
	changeTextareaHeight
} from "./actionCreator";

export const handleTextareaHeight = (event, minRows, maxRows) => {
	return (dispatch) => {
		const textareaLineHeight = 24;
		const previousRows = event.target.rows;
		
		event.target.rows = minRows;

		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

		if (currentRows === previousRows) {
			event.target.rows = currentRows;
		}

		if (currentRows >= maxRows) {
			event.target.rows = maxRows;
			event.target.scrollTop = event.target.scrollHeight;
		}

		dispatch(changeTextareaHeight(event.target.value, currentRows));
	}
};