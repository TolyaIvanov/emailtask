import React from 'react';
import {connect} from 'react-redux';

import {
	TEXTAREA_MAX_ROWS,
	TEXTAREA_MIN_ROWS
} from "../../constants/constants";

import {
	handleTextareaHeight,
} from "../../actions/form/input";

import Textarea from './../../components/form/Textarea';

class TextareaContainer extends React.Component {
	render() {
		let rows;

		if (this.props.data.currentRows && this.props.data.currentRows <= TEXTAREA_MAX_ROWS) {
			rows = this.props.data.currentRows;
		} else {
			rows = this.props.data.currentRows === undefined ? TEXTAREA_MIN_ROWS : TEXTAREA_MAX_ROWS
		}

		return (
			<Textarea
				placeholder={this.props.placeholder}
				changeHeight={this.props.changeTextareaHeight}
				inputValue={this.props.data.value}
				hiddenDivText={this.props.data.hiddenDivText}
				value={this.props.data.value}
				rows={rows}
			/>
		)
	}
}

const mapStateToProps = (state) => ({
	data: state.changeTextarea,
});

const mapDispatchToProps = (dispatch) => ({
	changeTextareaHeight: (element, minRows, maxRows) => dispatch(handleTextareaHeight(element, minRows, maxRows))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextareaContainer);