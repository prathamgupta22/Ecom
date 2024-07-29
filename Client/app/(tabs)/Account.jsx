import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "react-native-vector-icons";
import { userData } from "./../../data/userData";
import { useRouter } from "expo-router";

const Account = () => {
  const router = useRouter();
  return (
    <View style={{ backgroundColor: "#e9ecef", flex: 1 }}>
      <View style={styles.container}>
        <Image source={{ uri: userData.profilePic }} style={styles.image} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.name}>
            Hi
            <Text style={{ color: "#05141c", fontWeight: "bold" }}>
              {" "}
              {userData.name}
            </Text>
            👋
          </Text>
          <Text>Email : {userData.email}</Text>
          <Text>Contact : {userData.contact}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Text style={styles.heading}>Account Setting</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              router.push("/Screens/Profile", { id: userData._id })
            }
          >
            <FontAwesome style={styles.btnText} name="edit" />
            <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              router.push("/Screens/MyOrders", { id: userData._id })
            }
          >
            <FontAwesome style={styles.btnText} name="bars" />
            <Text style={styles.btnText}>My Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => router.push("/(tabs)/Notification")}
          >
            <FontAwesome style={styles.btnText} name="bell" />
            <Text style={styles.btnText}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <FontAwesome style={styles.btnText} name="windows" />

            <Text style={styles.btnText}>Admin Panel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
  },
  image: {
    height: 130,
    resizeMode: "contain",
  },
  name: {
    marginTop: 10,
    fontSize: 20,
  },
  btnContainer: {
    padding: 10,
    backgroundColor: "#ffffff",
    margin: 10,
    marginVertical: 20,
    elevation: 5,
    borderRadius: 10,
    paddingBottom: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 5,
  },
  btnText: {
    fontSize: 15,
    marginRight: 10,
  },
});
export default Account;
