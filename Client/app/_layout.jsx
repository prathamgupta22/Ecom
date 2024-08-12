import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import About from "../screens/About";
import { Provider } from "react-redux";
import store from "../redux/store";
const _layout = () => {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ statusBarColor: "#05141c" }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
};

export default _layout;
