import React from 'react';

class Input extends React.Component {
	render() {
		return (
			<div className={'input-wrapper'}>
				<input
					type={'text'}
					className={'letter-input'}
					placeholder={this.props.placeholder}
					onInput={this.props.changeValue()}
					value={this.props.value}
				/>
			</div>
		);
	}
}

export default Input;