import {
	INPUT_CHANGING,
	TEXTAREA_CHANGING,
} from './../../constants/constants';

export const changeInputValue = value => ({
	type: INPUT_CHANGING,
	value,
});

export const changeTextareaHeight = element => ({
	type: TEXTAREA_CHANGING,
	element,
});