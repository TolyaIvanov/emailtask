import {
	SEND_INFO
} from "../../constants/constants";

export const updateRequsts = (state = [], {type, list}) => {
	switch (type) {
		case SEND_INFO:
			return [
				...state,
				list
			];
		default:
			return state;
	}
};



