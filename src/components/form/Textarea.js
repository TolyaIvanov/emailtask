import React from 'react';

class Textarea extends React.Component {
	render() {
		return (
			<div className={'input-wrapper'}>
				<textarea
					value={this.props.inputValue}
					className={'letter-message'}
					placeholder={this.props.placeholder}
					onInput={(e) => {
						this.props.changeHeight(e.target)
					}}
					style={{height: this.hiddenDiv && this.hiddenDiv.offsetHeight}}
				/>
				<div className={'textarea-hidden-div'}
				     ref={div => this.hiddenDiv = div}
				>
					{this.props.hiddenDivText}
				</div>
			</div>
		);
	}

}

export default Textarea;