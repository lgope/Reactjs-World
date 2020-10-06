import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    allUsers: null,
    isLoading: true,
  },
  reducers: {
    addUser: (state, action) => {
      //   state.name = action.payload;
      state.allUsers = state.allUsers.concat(action.payload);
      state.isLoading = false;
    },

    deleteUser: (state, action) => {
      state.allUsers = state.allUsers.filter(
        user => user.id !== action.payload
      );
      state.isLoading = false;
    },

    updateUser: (state, action) => {
      state.allUsers = state.allUsers.map(user =>
        user.id === action.payload.id ? { ...action.payload } : user
      );
      state.isLoading = false;
    },

    getAllUsers: (state, action) => {
      state.allUsers = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  addUser,
  deleteUser,
  updateUser,
  getAllUsers,
} = userSlice.actions;

export const selectUsers = state => state.user;

export default userSlice.reducer;
