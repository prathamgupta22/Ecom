import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Logout = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Are you sure u want to Logout</Text>
      <TouchableOpacity onPress={() => router.push("/Screens/auth/Login")}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;
