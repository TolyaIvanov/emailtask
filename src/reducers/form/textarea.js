import {
	TEXTAREA_CHANGING,
} from "../../constants/constants";

export const changeTextarea = (state = [], {type, value, currentRows}) => {
	switch (type) {
		case TEXTAREA_CHANGING:
			return {
				...state,
				value,
				currentRows,
			};
		default :
			return state;
	}
};