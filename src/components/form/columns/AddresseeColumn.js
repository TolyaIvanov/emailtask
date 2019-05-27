import React from 'react';

import InputContainer from './../../../containers/form/InputContainer';

const AddresseeColumn = () => (
	<div className="addressee-info">
		<p className={'who-get'}>Кому</p>
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

export default AddresseeColumn;