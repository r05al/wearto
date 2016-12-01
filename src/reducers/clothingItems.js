import { items } from '../data.json';
import { fromJS, Map } from 'immutable';
import {
  TOGGLE_ITEM,
  ADD_CLOTHING_ITEM,
  UPDATE_CLOTHING_ITEM
} from '../constants';

const initialState = fromJS(items);

const clothingItems = (state = initialState, action) => {
  let itemIndex;
	switch (action.type) {
		case TOGGLE_ITEM:
      itemIndex = getClothingItemIndex(state, action.id);
      return state.updateIn([itemIndex, 'available'], value => !value);
    case ADD_CLOTHING_ITEM:
      const item = Map({'href': 'http://placehold.it/455x475'}).merge(action.itemDraft);
      return state.push(item);
    case UPDATE_CLOTHING_ITEM:
      itemIndex = getClothingItemIndex(state, action.id);
      return state.set(itemIndex, action.itemDraft);
		default:
			return state;
	}
}

export default clothingItems;

export const getClothingItem = (state, id) => state.find((item)=>item.get('id') == id);
export const getClothingItemIndex = (state, id) => state.findIndex((item)=>item.get('id') == id);
