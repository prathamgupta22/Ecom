import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const CartItem = ({ item }) => {
  const [qty, setQty] = useState(1);

  // Handle function for + -
  const handleAddQty = () => {
    if (qty === 10) return alert("You can't add more than 10 quantity");
    setQty((prev) => prev + 1);
  };
  const handleRemoveQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item?.imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.price}>Price: {item?.price} $</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnQty} onPress={handleRemoveQty}>
            <Text style={styles.btnQtyText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>{qty}</Text>
          <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
            <Text style={styles.btnQtyText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderColor: "#05141c",
    borderWidth: 2,
    borderRadius: 10,
    margin: 12,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnQty: {
    backgroundColor: "#cccccc",
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnQtyText: {
    fontSize: 20,
    color: "#05141c",
    fontWeight: "bold",
  },
  qtyText: {
    fontSize: 22,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
});

export default CartItem;
