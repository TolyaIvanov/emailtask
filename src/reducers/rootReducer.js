import {combineReducers} from "redux";

import {
	validateInput,
} from './form/input'

import {
	changeTextarea
} from './form/textarea'

import {
	fetchRequestList
} from "./requestsInfo/requests";

export default combineReducers({
	validateInput,
	changeTextarea,
	fetchRequestList,
});

// тема письма,
// имя отправителя,
// email отправителя,
// имя получателя,
// email получателя,
// сообщение.
// Сделайте возможность прикреплять файлы к письму — не больше 5 МБ одном файле, и не больше 20 МБ




