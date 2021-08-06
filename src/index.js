import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './common/store';
import NewsFeeds from './components/NewsFeeds';
import FeedDetails from './components/FeedDetails';

ReactDOM.render(
    <Provider store={ store }>
        <Router basename="/">
			<Switch>
				<Route exact path={ '/' } component={ NewsFeeds } />
                <Route exact path={ '/feed-details/:name' } component={ FeedDetails } />
			</Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();