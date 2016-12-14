// let's go!
import React from 'react';
import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './css/main.css';
import './css/custom.css';
import './css/material.components.ext.min.css';
import './css/material.components.ext.min.js';
//import './css/muidocs.css';

// Import Components
import App from './components/App';
import MainSection from './components/MainSection';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={MainSection}> </IndexRoute>
				<Route path="/view/:postId" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));
