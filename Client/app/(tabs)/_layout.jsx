import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const _layout = () => {
  const tabIcon = (iconName) => {
    return <FontAwesome size={28} name={iconName} style={styles.caticon} />;
  };

  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#04052e",
        tabBarInactiveTintColor: "#013a63",
        tabBarActiveBackgroundColor: "#fff",
        tabBarStyle: { backgroundColor: "#ced4da", fontWeight: "bold" },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: () => tabIcon("home"),
          headerShown: true,
          headerTitle: "Home",
        }}
      />
      <Tabs.Screen
        name="Notification"
        options={{
          tabBarIcon: () => tabIcon("bell"),
          headerShown: true,
          headerTitle: "Notify",
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          tabBarIcon: () => tabIcon("user"),
          headerShown: true,
          headerTitle: "Account",
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          tabBarIcon: () => tabIcon("shopping-cart"),
          headerShown: true,
          headerTitle: "Cart",
        }}
      />

      <Tabs.Screen
        name="Logout"
        options={{
          tabBarIcon: () => tabIcon("sign-out"),
          headerShown: true,
          headerTitle: "Logout",
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  caticon: {
    color: "#013a63",
  },
});

export default _layout;
