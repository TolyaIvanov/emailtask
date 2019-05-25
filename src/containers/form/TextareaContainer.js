import React from 'react';
import {connect} from 'react-redux';

import {
	handleTextareaHeight,
} from "../../actions/form/input";

import Textarea from './../../components/form/Textarea';

class TextareaContainer extends React.Component {
	render() {
		return (
			<Textarea
				placeholder={this.props.placeholder}
				changeHeight={this.props.changeTextareaHeight(this.props.textareaHeight)}
				value={this.props.value}
			/>
		)
	}
}

const mapStateToProps = (state) => ({
	textareaHeight: state.changeInput,
});

const mapDispatchToProps = (dispatch) => ({
	changeTextareaHeight: (element) => dispatch(handleTextareaHeight(element))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextareaContainer);