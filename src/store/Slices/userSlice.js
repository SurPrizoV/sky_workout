import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: null,
  password: null,
  email: null,
  token: null,
  id: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.password = action.payload.password;
      state.login = action.payload.login;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.password = null;
      state.login = null;
      state.email = null;
      state.token = null;
      state.id = null;
    },
    setNewPass(state, actions) {
      state.password = actions.payload.password;
    },

    setNewLogin(state, actions) {
      state.login = actions.payload.login;
    },
  },
});

export const { setUser, removeUser, setNewPass, setNewLogin } =
  userSlice.actions;
export default userSlice.reducer;
