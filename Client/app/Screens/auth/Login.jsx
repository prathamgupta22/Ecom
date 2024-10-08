import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import InputBox from "../../../components/Form/InputBox";
import { useRouter } from "expo-router";

//redux hooks
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/features/auth/userAction";

const Login = () => {
  const router = useRouter();
  const loginImage =
    "https://cdn.pixabay.com/photo/2022/11/06/04/57/cat-7573258_640.png";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //hooks
  const dispatch = useDispatch();
  //global state
  const { loading, error, message } = useSelector((state) => state.user);

  //login function
  const handleLogin = async () => {
    if (!email || !password) {
      return alert("Please add email or password");
    }
    try {
      await dispatch(login(email, password));
      if (!error) {
        router.push("/(tabs)/Home");
      }
    } catch (err) {
      alert();
      // Optional: display an alert or some form of user feedback
    }
  };

  ///life cycle
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      alert(message);
      dispatch({ type: "clearMessage" });
    }
  }, [error, message, dispatch]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} style={styles.image} />
      <InputBox
        placeholder={"Enter You Email"}
        value={email}
        setValue={setEmail}
        autoComplete={"email"}
      />
      <InputBox
        value={password}
        setValue={setPassword}
        placeholder={"Enter You Password"}
        secureTextEntry={true}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <Text>
          Not a user yet ? Please{" "}
          <Text
            style={styles.link}
            onPress={() => router.push("/Screens/auth/Register")}
          >
            Register !
          </Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "100%",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: "#000000",
    width: "80%",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  loginBtnText: {
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
  link: {
    color: "red",
  },
});
export default Login;
