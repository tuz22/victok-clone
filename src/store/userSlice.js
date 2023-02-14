import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    addAccount(state, action){
      state.push(action.payload)
      console.log(state)
    },
  }
})

export const { addAccount } = userSlice.actions;

export default userSlice;