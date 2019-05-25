import React from 'react';

class Textarea extends React.Component {
	render() {
		return (
			<div className={'input-wrapper'}>
				<textarea
					value={this.props.value}
					className={'letter-message'}
					placeholder={this.props.placeholder}
					onInput={this.props.changeHeight}
				/>
				<div className={'textarea-hidden-div'}></div>
			</div>
		);
	}

}

export default Textarea;