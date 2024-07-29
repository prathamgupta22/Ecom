import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Header from "./Header";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Categories from "./../category/Categories";
const Layout = () => {
  return (
    <ScrollView>
      <Header />
      <Categories />
      <Banner />
      <Products />
    </ScrollView>
  );
};

export default Layout;
