import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import { createStore } from 'redux';
import reducer from './reducers';
import css from '../public/styles.css';

const store = createStore(reducer);

render(<Root store={store}/>, document.getElementById('root'));
