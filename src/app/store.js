import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

// apply middleware aka thunk here with applyMiddleware(thunk)
export default configureStore({
	reducer: {
		// this says the global user should get its data from userReducer. can have different slices here. i think user comes from the name property in userSlice createSlice. this makes state available to components within provider
		userA: userReducer,
	},
});
