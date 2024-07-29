import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "react-native-vector-icons";

import { categoriesData } from "./../../data/CategoriesData";
import { useNavigation } from "expo-router";

const Categories = () => {
  const navigation = useNavigation();

  return (
    <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {categoriesData?.map((item) => (
          <View key={item._id}>
            <TouchableOpacity
              style={styles.catContainer}
              onPress={() => navigation.navigate(item.path)}
            >
              <FontAwesome name={item.icon} style={styles.caticon} />
              <Text style={styles.catTitle}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 76,
    backgroundColor: "#cccccc",
    flexDirection: "row",
    padding: 5,
    borderWidth: 2,
    shadowColor: "blue",
    elevation: 5,
  },
  catContainer: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  caticon: {
    fontSize: 30,
    verticalAlign: "top",
    color: "#013a63",
  },
  catTitle: {
    fontSize: 12,
    color: "#013a63",
    fontWeight: "bold",
  },
});

export default Categories;
