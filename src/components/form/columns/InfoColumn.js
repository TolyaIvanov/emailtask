import React from 'react';

import InputContainer from './../../../containers/form/InputContainer';
import TextareaContainer from './../../../containers/form/TextareaContainer';

const InfoColumn = () => (
	<div className="letter-info">
		<div className="inputs info">
			<InputContainer
				placeholder={'Тема письма'}
			/>
			<TextareaContainer
				placeholder={'Сообщение для пользователя'}
			/>
		</div>
	</div>
);

export default InfoColumn;