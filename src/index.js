import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers/reducer';
import routes from './routes';
import thunk from 'redux-thunk';

require('../styles/styles.scss');

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

const storage = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={storage}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.querySelector('.root'));

