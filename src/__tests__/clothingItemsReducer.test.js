import reducer from '../reducers/clothingItems';
import { fromJS, toJS } from 'immutable';
import * as types from '../constants';
import { items } from '../data.json';

describe('clothingItems reducer', () => {
	const testItems = fromJS(items);
	const testItem = fromJS({
    id: Date.now(),
    title:'leather jacket',
    tags:'black motorcycle',
    type:'jacket',
    available: true
	});
	
	it('should return initial state', () => {
		const initState = reducer(undefined, {})
		expect(
			reducer(undefined, {})
		).toEqual(testItems);
	});

	it('should toggle item availability', () => {
		const toggledItem = testItems.get(0);
		expect(
			reducer(testItems, {
				type: types.TOGGLE_ITEM,
				id: toggledItem.get('id')
			})
		).toEqual(
			testItems.setIn([0, 'available'], 
				!toggledItem.get('available'))
		);
	});

	describe('adding clothing items', () => {

		it('should add clothing item without href', () => {
			const defaultHref = 'http://placehold.it/455x475';
			const itemWithoutHref = testItem.set('href', defaultHref);
			expect(
				reducer(testItems, {
					type: types.ADD_CLOTHING_ITEM,
					itemDraft: testItem
				}).toJS()
			).toEqual(
				testItems.push(itemWithoutHref).toJS()
			);
		});

		it('should add clothing item with href', () => {
			const itemWithHref = testItem.set('href', 'someURL')
			expect(
				reducer(testItems, {
					type: types.ADD_CLOTHING_ITEM,
					itemDraft: itemWithHref
				}).toJS()
			).toEqual(
				testItems.push(itemWithHref).toJS()
			);
		});
	});

	it ('should update clothing items', () => {
		const testItem = testItems.get(0);
		const updatedItem = testItem.set('title', 'updated title');
		const updatedItems = testItems.set(0, updatedItem);
		expect(
			reducer(testItems, {
				type: types.UPDATE_CLOTHING_ITEM,
				id: testItem.get('id'),
				itemDraft: updatedItem
			}).toJS()
		).toEqual(
			updatedItems.toJS()
		)
	})
});