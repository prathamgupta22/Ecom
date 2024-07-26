import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import React, { useState } from "react";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log(searchText);
    setSearchText("");
  };

  return (
    <View style={{ height: 70, backgroundColor: "#05141c" }}>
      <View style={styles.container}>
        <View style={styles.Inputwraper}>
          <TextInput
            placeholder="Search Product"
            placeholderTextColor={"#05141c"}
            style={styles.input}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
        <TouchableOpacity style={styles.Inputicon} onPress={handleSearch}>
          <FontAwesome name="search" color="#05141c" size={16} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  Inputwraper: {
    width: "95%",
  },
  input: {
    height: 44,
    backgroundColor: "#fff",
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 16,
    fontSize: 15,
    fontWeight: "500",
  },
  Inputicon: {
    position: "absolute",
    right: 10,
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
