// redux/features/auth/userReducer.js
import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  { token: null, loading: false, isAuth: false, message: null, error: null },
  (builder) => {
    builder
      .addCase("loginRequest", (state) => {
        state.loading = true;
      })
      .addCase("loginSuccess", (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.isAuth = true;
      })
      .addCase("loginFail", (state, action) => {
        state.loading = false;
        state.isAuth = false;
        state.error = action.payload;
      });
    // ERROR MESSAGE CASE
    builder.addCase("clearError", (state) => {
      state.error = null;
    });
    builder.addCase("clearMessage", (state) => {
      state.message = null;
    });
  }
);
