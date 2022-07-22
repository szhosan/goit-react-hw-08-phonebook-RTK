import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      console.log(action.payload);
      const accessToken = action.payload.token;
      const user = action.payload.user;
      state.user = user;
      state.token = accessToken;
      if (user && accessToken) {
        state.isLoggedIn = true;
      }
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const getCurrentUserName = state => state.auth.user?.name;
export const getCurrentToken = state => state.auth.token;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
