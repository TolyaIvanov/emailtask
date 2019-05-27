import React from 'react';

import {
	TEXTAREA_MAX_ROWS,
	TEXTAREA_MIN_ROWS,
} from "../../constants/constants";


class Textarea extends React.Component {
	render() {
		return (
			<div className={'input-wrapper'}>
				<textarea
					value={this.props.inputValue}
					className={'letter-message'}
					placeholder={this.props.placeholder}
					onInput={(event) => {
						this.props.changeHeight(event, TEXTAREA_MIN_ROWS, TEXTAREA_MAX_ROWS)
					}}
					rows={this.props.rows}
				/>
			</div>
		);
	}

}

export default Textarea;