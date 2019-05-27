import {
	TEXTAREA_CHANGING,
} from "../../constants/constants";

export const changeTextarea = (state = [], {type, value, hiddenDivText}) => {
	switch (type) {
		case TEXTAREA_CHANGING:
			return {
				...state,
				value,
				hiddenDivText,
			};
		default :
			return state;
	}
};