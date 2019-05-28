import React from 'react';
import {connect} from 'react-redux';

import {} from "../../actions/form/actionCreator";

import RequestsList from './../../components/RequestsInfo/RequestsList'

class RequestsListContainer extends React.Component {
	render() {
		return (
			<RequestsList

			/>
		)
	}
}

const mapStateToProps = (state) => ({
	answerList: state.data
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RequestsListContainer);