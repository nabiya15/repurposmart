import "materialize-css/dist/css/materialize.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Homepage from './pages/Homepage';
import Kitchen from './pages/Kitchen';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from "redux-thunk"; //middleware for redux store
//create action creator to modify the state thats contained in our redux store
import reducers from "./reducers";

const store = createStore(reducers,{}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
