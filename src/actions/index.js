import {
	DESELECT_ITEM,
	SELECT_ITEM,
	TOGGLE_ITEM,
	TOGGLE_LIST,
	CREATE_DRAFT,
	UPDATE_DRAFT,
	UPDATE_CLOTHING_ITEM,
	ADD_CLOTHING_ITEM,
	UPDATE_DATE,
	SET_LOOK,
	UPDATE_LOOK_DRAFT,
	ADD_LOOK,
	UPDATE_LOOK
} from '../constants';

export const deselect = (itemType) => ({
	type: DESELECT_ITEM,
	itemType
})

export const selectItem = (itemType, id) => ({
	type: SELECT_ITEM,
	itemType, 
	id
})

export const toggleItem = (id) => ({
	type: TOGGLE_ITEM,
	id
})

export const toggleList = (itemType) => ({
	type: TOGGLE_LIST,
	itemType
})

export const createDraft = (item) => ({
	type: CREATE_DRAFT,
	item
})

export const updateDraft = (field, value) => ({
	type: UPDATE_DRAFT,
	field,
	value
})

export const addClothingItem = (itemDraft) => ({
	type: ADD_CLOTHING_ITEM,
	itemDraft
})

export const updateClothingItem = (id, itemDraft) => ({
	type: UPDATE_CLOTHING_ITEM,
	id,
	itemDraft
})

export const updateDate = (date) => ({
	type: UPDATE_DATE,
	date
})

export const setLook = (look) => ({
	type: SET_LOOK,
	look
})

export const updateLookDraft = (field, value) => ({
	type: UPDATE_LOOK_DRAFT,
	field,
	value
})

export const addLook = (lookDraft) => ({
	type: ADD_LOOK,
	lookDraft
})

export const updateLook = (lookDraft) => ({
	type: UPDATE_LOOK,
	lookDraft
})