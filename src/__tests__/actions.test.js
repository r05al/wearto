import * as actions from '../actions';
import * as types from '../constants';
import { items } from '../data.json';

describe('actions', function() {
	const testItem = items[0];
	const testItemDraft = items[1];
	const defaultLook = () => {
	  return {
	    'id' : null,
	    'title': 'Configure your Look',
	    'description': 'Select items and prepare yourself for what\'s coming',
	    'date': null,
	    'pieces': {
	                'jacket' : 0,
	                'shirt' : 0,
	                'pant' : 0,
	                'shoe' : 0
	              }
	  }
	};

	describe('deselect', function() {
		it('should create an action to deselect an item', function() {
			const expectedAction = {
				type: types.DESELECT_ITEM,
				itemType: testItem
			}
			expect(actions.deselect(testItem)).toEqual(expectedAction);
		});
	});

	describe('selectItem', function() {
		it('should create an action to select an item', function() {
			const expectedAction = {
				type: types.SELECT_ITEM,
				itemType: testItem
			}
			expect(actions.selectItem(testItem)).toEqual(expectedAction);
		});
	});

	describe('toggleItem', function() {
		it('should create an action to toggle an item', function() {
			const expectedAction = {
				type: types.TOGGLE_ITEM,
				id: testItem
			}
			expect(actions.toggleItem(testItem)).toEqual(expectedAction);
		});
	});

	describe('toggleList', function() {
		it('should create an action to toggle a list', function() {
			const itemType = 'jacket';
			const expectedAction = {
				type: types.TOGGLE_LIST,
				itemType
			}
			expect(actions.toggleList(itemType)).toEqual(expectedAction);
		});
	});

	describe('createDraft', function() {
		it('should create an action to create a draft item', function() {
			const expectedAction = {
				type: types.CREATE_DRAFT,
				item: testItem
			}
			expect(actions.createDraft(testItem)).toEqual(expectedAction);
		});
	});

	describe('updateDraft', function() {
		it('should create an action to update a draft item', function() {
			const field = 'title';
			const value = 'Updated Title';
			const expectedAction = {
				type: types.UPDATE_DRAFT,
				field,
				value
			}
			expect(actions.updateDraft(field, value)).toEqual(expectedAction);
		});
	});

	describe('updateClothingItem', function() {
		it('should create an action to update a clothing item', function() {
			const expectedAction = {
				type: types.UPDATE_CLOTHING_ITEM,
				id: testItem,
				itemDraft: testItemDraft
			}
			expect(actions.updateClothingItem(testItem, testItemDraft)).toEqual(expectedAction);
		});
	});

	describe('addClothingItem', function() {
		it('should create an action to add a clothing item', function() {
			const expectedAction = {
				type: types.ADD_CLOTHING_ITEM,
				itemDraft: testItemDraft
			}
			expect(actions.addClothingItem(testItemDraft)).toEqual(expectedAction);
		});
	});

	describe('updateDate', function() {
		it('should create an action to update the date', function() {
			const date = Date.now();
			const expectedAction = {
				type: types.UPDATE_DATE,
				date
			}
			expect(actions.updateDate(date)).toEqual(expectedAction);
		});
	});

	describe('setLook', function() {
		it('should create an action to set a look', function() {
			const look = defaultLook();
			const expectedAction = {
				type: types.SET_LOOK,
				look
			}
			expect(actions.setLook(look)).toEqual(expectedAction);
		});
	});

	describe('updateLookDraft', function() {
		it('should create an action to update a look draft', function() {
			const field = 'title';
			const value = 'Updated Title';
			const expectedAction = {
				type: types.UPDATE_LOOK_DRAFT,
				field,
				value
			}
			expect(actions.updateLookDraft(field, value)).toEqual(expectedAction);
		});
	});

	describe('addLook', function() {
		it('should create an action to add a look', function() {
			const lookDraft = defaultLook();
			const expectedAction = {
				type: types.ADD_LOOK,
				lookDraft
			}
			expect(actions.addLook(lookDraft)).toEqual(expectedAction);
		});
	});

	describe('updateLook', function() {
		it('should create an action to update a look', function() {
			const lookDraft = defaultLook();
			const expectedAction = {
				type: types.UPDATE_LOOK,
				lookDraft
			}
			expect(actions.updateLook(lookDraft)).toEqual(expectedAction);
		});
	});
});