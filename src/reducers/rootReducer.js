import {combineReducers} from "redux";

import {
	changeInput,
} from './form/input'

import {
	changeTextarea
} from './form/textarea'

export default combineReducers({
	changeInput,
	changeTextarea,
});

// тема письма,
// имя отправителя,
// email отправителя,
// имя получателя,
// email получателя,
// сообщение.
// Сделайте возможность прикреплять файлы к письму — не больше 5 МБ одном файле, и не больше 20 МБ




