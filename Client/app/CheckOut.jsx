import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Link, useNavigation } from "expo-router";

const Checkout = () => {
  const navigation = useNavigation();
  const handleCOD = () => {
    alert("Your Order Has Been Placed Successfully");
  };
  const handleOnline = () => {
    alert("Your Redirecting to payment gateway");
  };
  return (
    <View>
      <View style={Styles.container}>
        <Text style={Styles.heading}>Payment Options</Text>
        <Text style={Styles.price}>Total Amount : 101$</Text>
        <View style={Styles.paymentCard}>
          <Text style={Styles.paymentHeading}>Select your Payment Mode</Text>
          <TouchableOpacity style={Styles.paymentBtn} onPress={handleCOD}>
            <Text style={Styles.paymentBtnText}>Cash On Devlivery</Text>
          </TouchableOpacity>
          <View style={Styles.paymentBtn}>
            <Link
              style={Styles.paymentBtnText}
              onPress={handleOnline}
              href="Screens/Payment"
            >
              Online (CREDIT | DEBIT CARD)
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    height: "100%",
    paddingTop: 80,
  },
  heading: {
    paddingTop: 40,
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 22,
    marginBottom: 10,
    color: "#7F7F7F",
  },
  paymentCard: {
    backgroundColor: "#ffffff",
    width: "90%",
    borderRadius: 10,
    padding: 30,
    marginVertical: 10,
  },
  paymentHeading: {
    color: "#7F7F7F",
    marginBottom: 10,
  },
  paymentBtn: {
    backgroundColor: "#000000",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    marginVertical: 10,
  },
  paymentBtnText: {
    color: "#ffffff",
    textAlign: "center",
  },
});

export default Checkout;
