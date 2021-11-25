import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
	name: "posts",
	initialState: { posts: [] },
	reducers: {
		setPostsSuccess: (state, action) => {
			state.posts = action.payload;
		},
	},
});

export const { setPostsSuccess } = postsSlice.actions;

// posts is from store.js, not name above
export const selectPosts = (state) => {
	return state.posts.posts;
};

export default postsSlice.reducer;
