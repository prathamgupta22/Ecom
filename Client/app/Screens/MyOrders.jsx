// MyOrders.js
import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { orderData } from "./../../data/OrderData";
import OrderItem from "../../components/Form/OrderItem";

const MyOrders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Orders</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {orderData.map((order) => (
          <OrderItem key={order._id} order={order} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cccccc",
    padding: 15,
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 15,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
});

export default MyOrders;
