import { fromJS } from 'immutable';
import {
	CREATE_DRAFT,
	UPDATE_DRAFT
} from '../constants';

const defaultDraftCard = () => {
  return fromJS({
    id: Date.now(),
    title:'',
    tags:'',
    type:'jacket',
    available: true
  });
};

const clothingItemDraft = (state = defaultDraftCard(), action) => {
	switch (action.type) {
		case CREATE_DRAFT:
			if (action.item) {		
				return state.merge(action.item);	
			} else {
				return defaultDraftCard();
			}
		case UPDATE_DRAFT:
			return state.set(action.field, action.value);
		default: 
			return state; 	
	}
}

export default clothingItemDraft;
