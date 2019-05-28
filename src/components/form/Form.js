import React from 'react'

import InfoColumn from './columns/InfoColumn';
import SenderColumn from './columns/SenderColumn';
import AddresseeColumn from './columns/AddresseeColumn';
import SendButton from "./SendButton";
import FileDropzone from "./FileDropzone";

class Form extends React.Component {
	render() {
		return (
			<div className={'letter-form'}>
				<SenderColumn/>
				<AddresseeColumn/>
				<InfoColumn/>
				<FileDropzone/>
				<SendButton/>
			</div>
		);
	}
}

export default Form;