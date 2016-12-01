import { List, fromJS } from 'immutable';
import {
	ADD_LOOK,
	UPDATE_LOOK
} from '../constants';

const SAVED_LOOKS = fromJS([
	{
    'id' : '1',
    'title': 'camo',
    'description': 'Select items and prepare yourself for what\'s coming',
    'date': null,
    'pieces': {
                'jacket' : 4028,
                'shirt' : 0,
                'pant' : 0,
                'shoe' : 0
              }
  },
	{
    'id' : '2',
    'title': 'casual',
    'description': 'Select items and prepare yourself for what\'s coming',
    'date': null,
    'pieces': {
                'jacket' : 4018,
                'shirt' : 0,
                'pant' : 0,
                'shoe' : 0
              }
  },  	
  {
    'id' : '3',
    'title': 'formal',
    'description': 'Select items and prepare yourself for what\'s coming',
    'date': null,
    'pieces': {
                'jacket' : 4030,
                'shirt' : 0,
                'pant' : 0,
                'shoe' : 0
              }
  }
]);

const looks = (state = SAVED_LOOKS, action) => {
	switch (action.type) {
		case ADD_LOOK:
			return state.push(action.lookDraft);
		case UPDATE_LOOK:
			const lookIndex = getLookIndex(state, action.lookDraft.get('id'));
			return state.set(lookIndex, action.lookDraft);
		default:
			return state;
	}
}

export default looks;

export const getLook = (state, id) => state.find((look) => look.get('id') == id);
export const getLookIndex = (state, id) => state.findIndex((look) => look.get('id') == id);
