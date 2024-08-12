import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/auth/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default store;

// export
