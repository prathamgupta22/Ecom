import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputBox from "../../../components/Form/InputBox";
import { useRouter } from "expo-router";

const Register = () => {
  const router = useRouter();
  const loginImage =
    "https://www.pngkey.com/png/detail/203-2035339_register-user-register-online-icon-png.png";
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");

  // Register function
  const handleRegister = () => {
    // validation
    if (!email || !password || !name || !address || !city || !contact) {
      return alert("Please provide all fields ");
    }
    alert("Register Successfull");
    router.push("/Screens/auth/Login");
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} style={styles.image} />

      <InputBox
        placeholder={"Enter You Name"}
        value={name}
        setValue={setName}
        autoComplete={"name"}
      />
      <InputBox
        placeholder={"Enter You Email"}
        value={email}
        setValue={setEamil}
        autoComplete={"email"}
      />
      <InputBox
        value={password}
        setValue={setPassword}
        placeholder={"Enter You Password"}
        secureTextEntry={true}
      />
      <InputBox
        placeholder={"Enter You address"}
        value={address}
        setValue={setAddress}
        autoComplete={"address-line1"}
      />
      <InputBox
        placeholder={"Enter You city"}
        value={city}
        setValue={setCity}
        autoComplete={"country"}
      />
      <InputBox
        placeholder={"Enter You contact no"}
        value={contact}
        setValue={setContact}
        autoComplete={"name"}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
          <Text style={styles.loginBtnText}>Register</Text>
        </TouchableOpacity>
        <Text>
          Alredy a user please ?{"  "}
          <Text
            style={styles.link}
            onPress={() => router.push("/Screens/auth/Login")}
          >
            login !
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
    height: 150,
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
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    color: "red",
  },
});
export default Register;
