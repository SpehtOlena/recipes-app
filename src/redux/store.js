import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./reducers/recipesReducer";

export default configureStore({
	reducer: {
		recipes: recipesReducer
	}
})