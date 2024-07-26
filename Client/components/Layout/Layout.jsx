import { View } from "react-native";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <View>{children}</View>
      <Footer />
    </>
  );
};

export default Layout;
