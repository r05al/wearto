import reducer from '../reducers/listItems';
import { fromJS } from 'immutable';
import * as types from '../constants';

describe('listItems reducer', () => {
	const initialState = fromJS({
		'jacket': false,
		'shirt': false,
		'pant': false,
		'shoe': false
	});

	it('should return initial state', () => {
		expect(
			reducer(undefined, {})
		).toEqual(initialState);
	});
	
	it('should return a list with value toggled', () => {
		const itemType = 'shirt';
		const originalValue = initialState.get(itemType);
		expect(
			reducer(initialState, {
				type: types.TOGGLE_LIST,
				itemType
			})
		).toEqual(
			initialState.set(itemType, !originalValue)
		);
	});
});