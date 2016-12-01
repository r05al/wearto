import { fromJS } from 'immutable';
import { TOGGLE_LIST } from '../constants';

const initialState = fromJS({
	'jacket': false,
	'shirt': false,
	'pant': false,
	'shoe': false
});

const listItems = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_LIST:
			return state.update(action.itemType, value => !value);
		default:
			return state;
	}
}

export default listItems;
