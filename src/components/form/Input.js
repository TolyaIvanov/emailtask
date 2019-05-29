import React from 'react';

class Input extends React.Component {
	render() {
		let input;

		return (
			<div className={'input-wrapper'}>
				<input
					ref={node => {
						input = node
					}}
					type={'text'}
					className={'letter-input'}
					placeholder={this.props.placeholder}
					onInput={this.props.handleInputValue}
					value={this.props.value}
				/>
			</div>
		);
	}
}

export default Input;