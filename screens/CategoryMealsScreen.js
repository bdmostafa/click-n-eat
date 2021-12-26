import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CategoryMealsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Category Meals</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});