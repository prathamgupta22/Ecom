import { server } from "../../store";
import axios from "axios";

const baseURL = "http://192.168.1.13:8000";

// Action
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    // Hitting node login API request
    const { data } = await axios.post(
      `${baseURL}/user/login`,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({ type: "loginSuccess", payload: data?.message });
  } catch (error) {
    console.error("Login error:", error); // Log the error for debugging
    dispatch({
      type: "loginFail",
      payload: error.response?.data?.message || "Login failed",
    });
  }
};
