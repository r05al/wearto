import reducer from '../reducers/clothingItemDraft';
import { fromJS } from 'immutable';
import * as types from '../constants';

describe('clothingItems reducer', () => {
	const testItem = fromJS({
    id: Date.now(),
    title:'',
    tags:'',
    type:'jacket',
    available: true
	});
	
	it('should return initial state', () => {
		const initState = reducer(undefined, {});
		expect(initState).toEqual(fromJS(
				{
			    id: initState.get('id'),
			    title:'',
			    tags:'',
			    type:'jacket',
			    available: true
				 }
			));
	});

	it('should handle CREATE_DRAFT with no item passed', () => {
		const state = reducer(undefined, {
				type: types.CREATE_DRAFT,
				item: undefined
			})
		expect(state).toEqual(fromJS(
				{
					id: state.get('id'),
					title:'',
					tags:'',
					type:'jacket',
					available: true
				}
			)
		);
	});

	it('should handle CREATE_DRAFT with valid item passed', () => {
		expect(
			reducer(undefined, {
				type: types.CREATE_DRAFT,
				item: testItem
			})
		).toEqual(testItem);
	});

	it('should handle UPDATE_DRAFT', () => {
		expect(
			reducer(testItem, {
				type: types.UPDATE_DRAFT,
				field: 'title',
				value: 'Updated Title'
			})
		).toEqual(fromJS(
			{
				id: testItem.get('id'),
				title:'Updated Title',
				tags:'',
				type:'jacket',
				available: true
			}
		));
	});
});
