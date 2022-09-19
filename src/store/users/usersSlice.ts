import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { User } from "../../model/users";

const usersAdapter = createEntityAdapter<User>({})

const usersSlice = createSlice({
	name: "users",
	initialState: usersAdapter.getInitialState(),
	reducers: {}
})

export default usersSlice.reducer
