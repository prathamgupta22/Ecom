import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductsCard = ({ p }) => {
  const navigation = useNavigation();

  //ADD TO CART
  const handleAddToCart = () => {
    alert("added to cart");
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("productDetail", { _id: p._id })}
    >
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: p?.imageUrl }} />
        <Text style={styles.cardTitle}>{p?.name}</Text>
        <Text style={styles.cardDesc}>
          {p?.description.substring(0, 30)} ...more
        </Text>
        <View style={styles.BtnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("productDetail", { _id: p._id })}
          >
            <Text style={styles.btnText}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart} onPress={handleAddToCart}>
            <Text style={styles.btnText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#05141c",
    marginVertical: 4,
    marginHorizontal: 6,
    width: "45%",
    padding: 10,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  cardImage: {
    height: 120,
    width: "100%",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 10,
    textAlign: "left",
  },
  BtnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#000000",
    height: 20,
    width: 75,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnCart: {
    backgroundColor: "orange",
    height: 20,
    width: 75,
    borderRadius: 5,
    justifyContent: "center",
    marginHorizontal: 2,
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",

    marginHorizontal: 2,
  },
});

export default ProductsCard;
