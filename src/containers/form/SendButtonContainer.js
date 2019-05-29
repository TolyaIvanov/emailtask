import React from 'react';
import {connect} from 'react-redux';

import SendButton from './../../components/form/SendButton'
import {fetchRequest} from "../../actions/requests/requests";

class SendButtonContainer extends React.Component {
	render() {
		return (
			<SendButton
				sendInfo={this.props.sendInfo}
				data={this.props.data}
				url={this.props.url}
			/>
		)
	}
}

const mapStateToProps = (state) => ({
	data: state.fetchRequestList
});

const mapDispatchToProps = (dispatch) => ({
	sendInfo: (data, url) => dispatch(fetchRequest(data, url))
});

export default connect(mapStateToProps, mapDispatchToProps)(SendButtonContainer);