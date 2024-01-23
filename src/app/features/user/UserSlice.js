import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  users: [],
  loggedInUserId: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = {
        id: nanoid(),
        details: action.payload,
      };
      state.users.push(user);
      localStorage.setItem('users', JSON.stringify(state.users));
    },

    // removeUser: (state, action) => {
    //   state.users = state.users.filter((user) => user.id !== action.payload);
    // },
    loginUser: (state, action) => {
      state.loggedInUserId = action.payload;
    },
  },
});

export const selectUserArray = (state) => state.user.users;
export const selectLoggedInUserId = (state) => state.user.loggedInUserId;

export const selectLoggedInUser = (state) => {
  const loggedInUserId = state.user.loggedInUserId;
  return state.user.users.find((user) => user.id === loggedInUserId);
};

export const { addUser, removeUser, loginUser } = userSlice.actions;
export default userSlice.reducer;
