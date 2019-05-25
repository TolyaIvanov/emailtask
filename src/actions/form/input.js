import {
	changeTextareaHeight,
} from "./actionCreator";

export const handleTextareaHeight = (el) => {
	return (dispatch) => {
		let height = el.offsetHeight;

		dispatch(changeTextareaHeight(height));
	}
};