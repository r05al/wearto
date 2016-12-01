import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App';
import NewClothingItem from './containers/NewClothingItem';
import EditClothingItem from './containers/EditClothingItem';
import NewLook from './containers/NewLook';
import EditLook from './containers/EditLook';

const Root = ({ store }) => (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
        <Route path="items/new" component={NewClothingItem} />
        <Route path="items/:id/edit" component={EditClothingItem} />
  			<Route path="looks/new" component={NewLook} />
  			<Route path="looks/:id/edit" component={EditLook} />
			</Route>
		</Router>
	</Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
