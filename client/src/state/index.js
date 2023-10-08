import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: null,
  token: null,
  questions: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    updateScore: (state, action) => {
      state.totalScore = action.payload;
    },
  },
});
export const { setLogin, setLogout,updateScore } = authSlice.actions;
export default authSlice.reducer;
