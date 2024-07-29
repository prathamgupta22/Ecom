import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { ProductsData } from "../data/ProductsData";

const ProductDetail = () => {
  const params = useLocalSearchParams();

  const [pDetails, setPDetails] = useState({});
  const [qty, setQty] = useState(1);

  // get product dfetails
  useEffect(() => {
    //find product details
    const getProudct = ProductsData.find((p) => {
      return p?._id === Number(params?._id);
    });
    setPDetails(getProudct);
  }, [params?._id]);

  const handleAddQty = () => {
    if (qty === 10) return alert("you cant add more than 10 quantity");
    setQty((prev) => prev + 1);
  };
  const handleRemoveQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };
  return (
    <View style={{ backgroundColor: "#cccccc", height: "100%" }}>
      <Image source={{ uri: pDetails?.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{pDetails?.name}</Text>
        <Text style={styles.titles}>Price : {pDetails?.price} $</Text>
        <Text style={styles.desc}>Price : {pDetails?.description} $</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnCart}
            onPress={() => alert(`${qty} items added to cart`)}
            disabled={pDetails?.quantity <= 0}
          >
            <Text style={styles.btnCartText}>
              {pDetails?.quantity > 0 ? "ADD TO CART" : "OUT OF STOCK"}
            </Text>
          </TouchableOpacity>
          <View style={styles.btnbtnContainer}>
            <TouchableOpacity style={styles.btnQtyy} onPress={handleRemoveQty}>
              <Text style={styles.btnQtyText}>-</Text>
            </TouchableOpacity>
            <Text style={{ color: "#fff" }}>{qty}</Text>
            <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
              <Text style={styles.btnQtyText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 400,
    width: "100%",
  },
  container: {
    borderColor: "#05141c",
    padding: 8,
    height: "100%",
    borderWidth: 6,
    backgroundColor: "#cccccc",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 4,
    color: "#05141c",
    marginVertical: 7,
  },
  titles: {
    color: "#05141c",
    fontSize: 18,
    backgroundColor: "lightgrey",
    marginVertical: 7,
  },
  desc: {
    fontSize: 14,
    textTransform: "capitalize",
    textAlign: "left",
    marginVertical: 5,
  },
  btnContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 9,
    marginHorizontal: 8,
  },
  btnbtnContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#05141c",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 9,
    marginHorizontal: 8,
    borderRadius: 4,
  },
  btnCart: {
    width: "100%",
    backgroundColor: "#05141c",
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
  },
  btnCartText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  btnQty: {
    backgroundColor: "#05141c",
    width: 40,
    alignItems: "center",
    marginHorizontal: 10,
  },
  btnQtyy: {
    backgroundColor: "#05141c",
    width: 40,
    alignItems: "center",
    marginHorizontal: 10,
  },
  btnQtyText: {
    fontSize: 20,
    color: "#fff",
  },
});
export default ProductDetail;
