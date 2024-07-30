import { View, Text, StyleSheet } from "react-native";
import React from "react";

const OrderItem = ({ order }) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
        <Text style={styles.orderText}>Order ID: {order._id}</Text>
        <Text style={styles.orderText}>Date: {order.date}</Text>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>Product Details:</Text>
        <Text style={styles.productText}>Name: {order.productInfo.name}</Text>
        <Text style={styles.productText}>
          Price: ${order.productInfo.price.toFixed(2)}
        </Text>
        <Text style={styles.productText}>
          Quantity: {order.productInfo.qty}
        </Text>
      </View>
      <View style={styles.totalAmount}>
        <Text style={styles.totalText}>
          Total Amount: ${order.totalAmount.toFixed(2)}
        </Text>
      </View>
      <Text style={styles.status}>Order Status: {order.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    marginVertical: 10,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  orderInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingBottom: 10,
    marginBottom: 15,
  },
  orderText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "600",
  },
  productInfo: {
    marginBottom: 15,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#444",
    marginBottom: 5,
  },
  productText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
  },
  totalAmount: {
    marginBottom: 10,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  status: {
    fontSize: 16,
    fontWeight: "700",
    color: "#006400",
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingTop: 10,
  },
});

export default OrderItem;
