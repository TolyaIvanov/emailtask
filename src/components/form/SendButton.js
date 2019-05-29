import React from 'react'

class SendButton extends React.Component {
	render() {
		let props = this.props;
		
		return (
			<button
				className={'send-button'}
				// onClick={this.props.sendInfo(this.props.data, this.props.url)}
			>
				Отправить
			</button>
		)
	}
}

export default SendButton;