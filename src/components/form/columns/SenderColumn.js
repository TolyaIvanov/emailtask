import React from 'react';

import InputContainer from './../../../containers/form/InputContainer';

const SenderColumn = () => (
	<div className="sender-info">
		<p className={'who-send'}>От кого</p>
		<div className="inputs">
			<InputContainer
				placeholder={'Имя'}
			/>
			<InputContainer
				placeholder={'Email'}
			/>
		</div>
	</div>
);

export default SenderColumn;