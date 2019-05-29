import {
	SEND_INFO,
	REQUEST_IS_ACCEPTED,
	REQUEST_HAS_ERRORED,
	REQUEST_IS_LOADING
} from "../../constants/constants";

export const fetchRequestList = (state = [], {type, data, url, process}) => {
	switch (type) {
		case SEND_INFO: {
			return {
				...state,
				data,
				url
			}
		}
		case REQUEST_IS_ACCEPTED : {
			return {
				...state,
				process
			}
		}
		case REQUEST_HAS_ERRORED : {
			return {
				...state,
				process
			}
		}
		case REQUEST_IS_LOADING : {
			return {
				...state,
				process
			}
		}
		default:
			return state;
	}
};



