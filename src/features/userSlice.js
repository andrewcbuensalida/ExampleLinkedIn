import { createSlice } from "@reduxjs/toolkit";

// with createSlice, can define state, reducers, and actions all here.
//didnt need to export this
export const userSlice = createSlice({
	name: "user", //doesnt really do much. isnt needed anywhere?
	initialState: {
		user1: null,
	},
	reducers: {
		// action is optional. state is the current state.
		login: (state, action) => {
			// redux thunk might be in here? which means dispatch is in here, and waits for async stuff before it executes. so instead of returning an object, thunk returns a function which dispatches.
			state.user1 = action.payload;
		},
		logout: (state) => {
			state.user1 = null;
		},
	},
});

// these are from actions above, so you can access anywhere
export const { login, logout } = userSlice.actions;
//selectors, to pull in data from data layer to component. state.userA.user1 the first userA comes from the store.js, second user1 comes from initialState : {user1:...} and in reducers. it's kind of like state within a state.
export const selectUser = (state) => state.userA.user1;

// this will go in createStore in store.js
export default userSlice.reducer;
