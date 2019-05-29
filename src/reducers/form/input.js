import {
	INPUT_CHANGING,
} from "../../constants/constants";

export const validateInput = (state = [], {type, value}) => {
	switch (type) {
		case INPUT_CHANGING:
			return [
				...state,
				value,
			];
		default :
			return state;
	}
};