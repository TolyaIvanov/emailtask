import {
	TEXTAREA_CHANGING,
	INPUT_CHANGING,
} from "../../constants/constants";

export const changeInput = (state = [], {type, value, element}) => {
	switch (type) {
		case INPUT_CHANGING:
			return {
				...state,
				value,
			};
		case TEXTAREA_CHANGING:
			return {
				...state,
				value,
				element,
			};
		default :
			return state;
	}
};