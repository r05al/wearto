import reducer from '../reducers/lookDraft';
import { fromJS } from 'immutable';
import * as types from '../constants';

describe('lookDraft reducer', () => {
	const initialState = fromJS({
	  'id' : '',
	  'title': 'Configure your Look',
	  'description': 'Select items and prepare yourself for what\'s coming',
	  'date': null,
	  'pieces': {
	              'jacket' : 0,
	              'shirt' : 0,
	              'pant' : 0,
	              'shoe' : 0
	            }
	});

	it('should return initial state', () => {
		expect(
			reducer(undefined, {})
		).toEqual(initialState);
	});
	
	it('should deselect item from look draft', () => {
		const itemType = 'shirt';
		const setShirtLook = initialState.setIn(['pieces', itemType], 3001)
		expect(
			reducer(setShirtLook, {
				type: types.DESELECT_ITEM,
				itemType
			})
		).toEqual(
			setShirtLook.setIn(['pieces', itemType], 0)
		);
	});

	describe('setting a look', () => {
		it('should set the default look when no look is passed', () => {
			expect(
				reducer(initialState, {
					type: types.SET_LOOK
				})
			).toEqual(initialState);
		});

		it('should set a preset look into draft', () => {
			const look = fromJS({
				'id': 1234,
				'title': 'Formal',
				'description': 'tuxedo for evening',
				'pieces': {
					'jacket': 1,
					'shirt' : 2,
					'pant' : 3,
					'shoe' : 4
				}
			});
			expect(
				reducer(initialState, {
					type: types.SET_LOOK,
					look
				})
			).toEqual(look);
		});
	});

	it('should select item for look draft', () => {
		const itemType = 'pant';
		const id = 12;
		expect(
			reducer(initialState, {
				type: types.SELECT_ITEM,
				itemType,
				id
			})
		).toEqual(initialState.setIn(['pieces', itemType], id));
	});

	it('should update to selected date', () => {
		const date = Date.now();
		expect(
			reducer(initialState, {
				type: types.UPDATE_DATE,
				date
			})
		).toEqual(initialState.set('date', date));
	});

	describe('updating an item that is on look draft', () => {
		const id = 24;
		const itemDraft = fromJS({
	    id,
	    title:'updated item',
	    tags:'with new tags',
	    type:'jacket',
	    available: true
	  });
		it('should update clothing item under then same type', () => {
			const stateWithItem = initialState.setIn(['pieces', 'jacket'], id);
			expect(
				reducer(stateWithItem, {
					type: types.UPDATE_CLOTHING_ITEM,
					itemDraft,
					id
				})
			).toEqual(stateWithItem);
		});

		it('should update clothing item under different type', () => {
			const stateWithItem = initialState.setIn(['pieces', 'pant'], id);
			const updatedPieces = fromJS({'pieces': { 'jacket': id, 'pant': 0}});
			const updatedStateWithItem = stateWithItem.mergeDeep(updatedPieces);
			expect(
				reducer(stateWithItem, {
					type: types.UPDATE_CLOTHING_ITEM,
					itemDraft,
					id
				})
			).toEqual(updatedStateWithItem);
		});
	});

	it('should update look draft', () => {
		const field = 'title';
		const value = 'Updated New Title';
		expect(
			reducer(initialState, {
				type: types.UPDATE_LOOK_DRAFT,
				field,
				value
			})
		).toEqual(initialState.set(field, value));
	});
});
