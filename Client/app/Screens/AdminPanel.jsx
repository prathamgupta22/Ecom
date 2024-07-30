import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "react-native-vector-icons";

const AdminPanel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.heading}>Dashboard</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <FontAwesome style={styles.icon} name="edit" />
            <Text style={styles.btnText}>Manage Products</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <FontAwesome style={styles.icon} name="tags" />
            <Text style={styles.btnText}>Manage Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <FontAwesome style={styles.icon} name="users" />
            <Text style={styles.btnText}>Manage Users</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <FontAwesome style={styles.icon} name="shopping-cart" />
            <Text style={styles.btnText}>Manage Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <FontAwesome style={styles.icon} name="info-circle" />
            <Text style={styles.btnText}>About App</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f9",
  },
  main: {
    flex: 1,
    margin: 15,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    elevation: 8,
  },
  heading: {
    backgroundColor: "#1e90ff",
    color: "#ffffff",
    textAlign: "center",
    paddingVertical: 15,
    fontSize: 24,
    fontWeight: "bold",
    borderBottomWidth: 3,
    borderBottomColor: "#ffffff",
  },
  btnContainer: {
    padding: 20,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 15,
    transform: [{ scale: 1 }],
    transition: "transform 0.2s ease-in-out",
  },
  btnText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "500",
  },
  icon: {
    fontSize: 24,
    color: "#1e90ff",
    marginRight: 15,
  },
});

export default AdminPanel;
