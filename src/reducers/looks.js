import { List } from 'immutable';
import {
	ADD_LOOK,
	UPDATE_LOOK
} from '../constants';

const looks = (state = List(), action) => {
	switch (action.type) {
		case ADD_LOOK:
			const look = action.lookDraft.set('id', Date.now());
			return state.push(look);
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
