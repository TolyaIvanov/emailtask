import React from 'react';

import InputContainer from './../../../containers/form/InputContainer';
import TextareaContainer from './../../../containers/form/TextareaContainer';

const InfoColumn = () => (
	<div className="main-info">
		<InputContainer
			placeholder={'Введите тему письма'}
		/>
		<TextareaContainer
			placeholder={'Введите сообщение для пользователя'}
		/>
	</div>
);

export default InfoColumn;