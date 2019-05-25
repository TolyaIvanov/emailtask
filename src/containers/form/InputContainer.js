import React from 'react';
import {connect} from 'react-redux';

import {
	changeInputValue,
} from "../../actions/form/actionCreator";

import Input from './../../components/form/Input';

class InputContainer extends React.Component {
	render() {
		return (
			<Input
				placeholder={this.props.placeholder}
				changeValue={this.props.resetInputValue}
				value={this.props.value}
			/>
		)
	}
}

const mapStateToProps = (state) => ({
	inputValue: state.changeInput,
});

const mapDispatchToProps = (dispatch) => ({
	resetInputValue: (value) => dispatch(changeInputValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer);