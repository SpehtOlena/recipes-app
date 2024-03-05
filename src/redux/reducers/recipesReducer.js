import { CREATE_ITEM, DELETE_ITEM, EDIT_ITEM, GET_DATA, GET_ITEM } from '../types'

const initialState = {
	data: [],
	item: {}
}

export default function recipesReducer(state = initialState, action) {
	switch (action.type) {
		default:
			return state
		case GET_DATA: {
			return { ...state, data: action.payload }
		}
		case GET_ITEM: {
			return { ...state, item: action.payload }
		}
		case CREATE_ITEM: {
			return { ...state, data: [...state.data, action.payload] }
		}
		case EDIT_ITEM: {
			return {
				...state, data: state.data.map(value => {
					if (value.id === action.payload.id) {
						return action.payload
					} else {
						return value
					}
				})
			}
		}
		case DELETE_ITEM: {
			return { ...state, data: state.data.filter(value => value.id !== action.payload.id) }
		}
	}
}