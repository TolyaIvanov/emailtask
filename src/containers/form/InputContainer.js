import React from 'react';
import {connect} from 'react-redux';

import {
	inputValue,
} from "../../actions/form/actionCreator";

import Input from './../../components/form/Input';

class InputContainer extends React.Component {
	render() {
		return (
			<Input
				placeholder={this.props.placeholder}
				changeValue={this.props.validateInput}
				value={this.props.value}
				changeInput={this.props.handleInputValue}
			/>
		)
	}
}

const mapStateToProps = (state) => ({
	inputValue: state.validateInput,
});

const mapDispatchToProps = (dispatch) => ({
	handleInputValue: (evt) => dispatch(inputValue(evt.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer);