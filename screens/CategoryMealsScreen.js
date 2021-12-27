import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

export const CategoryMealsScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate({
            routeName: "MealDetail",
          });
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          // navigation.goBack();
          navigation.pop();
        }}
      />
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
