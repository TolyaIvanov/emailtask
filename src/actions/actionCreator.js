import {
	SEND_INFO
} from "../constants/constants";

export const sendInfoCreater = (data) => ({
	type: SEND_INFO,
	data,
});



