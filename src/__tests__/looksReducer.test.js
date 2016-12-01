import reducer, { getLook, getLookIndex } from '../reducers/looks';
import { fromJS, List } from 'immutable';
import * as types from '../constants';

describe('lookDraft reducer', () => {
	const initialState = List();
	const lookDraft = fromJS({
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
	const lookDraft2 = lookDraft.merge({'id': 2345,})
	const lookDraft3 = lookDraft.merge({'id': 3456,})

	it('should return initial state', () => {
		expect(
			reducer(undefined, {})
		).toEqual(initialState);
	});

	it('should add looks', () => {
		const stateWithLook = reducer(initialState, {
				type: types.ADD_LOOK,
				lookDraft
			});
		const updatedDraft = lookDraft.set('id', stateWithLook.getIn([0, 'id']));
		expect(stateWithLook).toEqual(initialState.push(updatedDraft));
	});

	it('should update looks', () => {
		const stateWithLook = initialState.push(lookDraft);
		const updatedDraft = lookDraft.set('description', 'effortless cool');
		expect(
			reducer(stateWithLook, {
				type: types.UPDATE_LOOK,
				lookDraft: updatedDraft
			})
		).toEqual(stateWithLook.set(0, updatedDraft));
	});

	describe('look helper functions', () => {
		const stateWithLooks = initialState.push(lookDraft,lookDraft2,lookDraft3);
		it('should get look', () => {
			const retrievedLook = getLook(stateWithLooks, lookDraft2.get('id'));
			expect(retrievedLook).toEqual(lookDraft2);
		});

		it('should get look index', () => {
			const retrievedIndex = getLookIndex(stateWithLooks, lookDraft3.get('id'));
			expect(retrievedIndex).toEqual(stateWithLooks.indexOf(lookDraft3));
		});
	})
});
