import { createSlice } from "@reduxjs/toolkit";

// with createSlice, can define state, reducers, and actions all here.
export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
	},
	reducers: {
		// action is optional
		login: (state, action) => {
			// redux thunk might be in here? which means dispatch is in here, and waits for async stuff before it executes. so instead of returning an object, thunk returns a function which dispatches.
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});

// these are from actions above
export const { login, logout } = userSlice.actions;
//selectors, to pull in data from data layer to component. state.user.user the first user comes from the store.js
export const selectUser = (state) => {
	console.log(`This is state.user`);
	console.log(state.user);
	return state.user.user;
};

// this will go in createStore in store.js
export default userSlice.reducer;
