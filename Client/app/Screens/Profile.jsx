import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Form/InputBox";
import { userData } from "../../data/userData";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();

  const [email, setEamil] = useState(userData.email);
  const [profilePic, setProfilePic] = useState(userData.profilePic);
  const [password, setPassword] = useState(userData.password);
  const [name, setName] = useState(userData.name);
  const [address, setAddress] = useState(userData.address);
  const [city, setCity] = useState(userData.city);
  const [contact, setContact] = useState(userData.contact);

  //   update profile
  const handleUpdate = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert("Please provide all fields");
    }
    alert("profile updated Successfully");
    router.push("/(tabs)/Account");
  };
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: profilePic }} />
            <Pressable onPress={() => alert("Profile dialog box")}>
              <Text style={{ color: "red", marginTop: 15 }}>
                Update your profile pic
              </Text>
            </Pressable>
          </View>
          <InputBox
            value={name}
            setValue={setName}
            placeholder={"enter you name"}
            autoComplete={"name"}
          />
          <InputBox
            value={email}
            setValue={setEamil}
            placeholder={"enter you email"}
            autoComplete={"email"}
          />
          <InputBox
            value={password}
            setValue={setPassword}
            placeholder={"enter you password"}
            autoComplete={"password"}
            secureTextEntry={true}
          />
          <InputBox
            value={address}
            setValue={setAddress}
            placeholder={"enter you address"}
            autoComplete={"address-line1"}
          />
          <InputBox
            value={city}
            setValue={setCity}
            placeholder={"enter you city"}
            autoComplete={"country"}
          />
          <InputBox
            value={contact}
            setValue={setContact}
            placeholder={"enter you contact no"}
            autoComplete={"tel"}
          />
          <TouchableOpacity style={styles.btnUpdate} onPress={handleUpdate}>
            <Text style={styles.btnUpdateText}>Update Profile</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
  btnUpdate: {
    backgroundColor: "#000000",
    height: 45,
    borderRadius: 20,
    marginHorizontal: 34,
    justifyContent: "center",
    marginTop: 15,
  },
  btnUpdateText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
  },
});
export default Profile;
