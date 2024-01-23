
import { configureStore } from '@reduxjs/toolkit';
import { userSlice, selectLoggedInUserId } from './features/user/UserSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
const storedUsers = localStorage.getItem('users');
if (storedUsers) {
  store.dispatch(userSlice.actions.addUser(JSON.parse(storedUsers)));
}
export const selectLoggedInUser = (state) => {
    const loggedInUserId = selectLoggedInUserId(state);
  return state.user.users.find((user) => user.id === loggedInUserId);
};
