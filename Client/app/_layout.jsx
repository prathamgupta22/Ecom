import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import About from "../screens/About";

const _layout = () => {
  return (
    <Stack screenOptions={{ statusBarColor: "#05141c" }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
