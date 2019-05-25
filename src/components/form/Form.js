import React from 'react'

import InfoColumn from './columns/InfoColumn';

class Form extends React.Component {
	render() {
		return (
			<div className={'letter-form'}>
				<InfoColumn/>
			</div>
		);
	}
}

export default Form;