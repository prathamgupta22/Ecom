import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout/Layout";
import Categories from "../category/Categories";

const Home = () => {
  return (
    <Layout>
      <Categories />
      <View>
        <Text>Home</Text>
      </View>
    </Layout>
  );
};

export default Home;
