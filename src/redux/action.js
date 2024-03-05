import axios from "axios";
import { CREATE_ITEM, DELETE_ITEM, EDIT_ITEM, GET_DATA, GET_ITEM } from "./types"

const URL = 'http://localhost:3000/recipes/'

export function axiosRequest(data, request) {
	const httpRequest = request.toLowerCase()
	switch (request) {
		default:
			return async dispatch => {
				axios
					.get(URL)
					.then(response => {
						dispatch({ type: GET_DATA, payload: response.data })
					})
			}
		case "get": {
			return async dispatch => {
				axios
					.get(`${URL}${data.id}`)
					.then(response => {
						dispatch({ type: GET_ITEM, payload: response.data })
					})
			}
		}
		case "post": {
			return async dispatch => {
				axios
					.post(URL, data)
					.then(response => {
						dispatch({ type: CREATE_ITEM, payload: response.data })
					})
			}
		}
		case "put": {
			return async dispatch => {
				axios
					.put(`${URL}${data.id}`, data)
					.then(response => {
						dispatch({ type: EDIT_ITEM, payload: response.data })
					})
			}
		}
		case "delete": {
			return async dispatch => {
				axios
					.delete(`${URL}${data.id}`)
					.then(response => {
						dispatch({ type: DELETE_ITEM, payload: data })
					})
			}
		}
	}
}