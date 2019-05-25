import React from 'react';
import {connect} from 'react-redux';

import {
	changeTextareaHeight,
} from "../../actions/form/actionCreator";

import Textarea from './../../components/form/Textarea';

class TextareaContainer extends React.Component {
	render() {
		return (
			<Textarea
				placeholder={this.props.placeholder}
				changeHeight={this.props.changeTextareaHeight}
				value={this.props.value}
			/>
		)
	}
}

const mapStateToProps = (state) => ({
	textareaHeight: state.changeInput,
});

const mapDispatchToProps = (dispatch) => ({
	changeTextareaHeight: (element) => dispatch(changeTextareaHeight(element))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextareaContainer);