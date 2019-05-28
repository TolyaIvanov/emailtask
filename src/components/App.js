import React from 'react';
import {Provider} from 'react-redux';
import store from './../store';

import Form from './form/Form';
import RequestsList from './RequestsInfo/RequestsList'

import './../styles/main.css'


function App() {
	return (
		<Provider store={store}>
			<div className="wrapper">
				<Form/>
				<RequestsList/>
			</div>
		</Provider>
	);
}

export default App;
