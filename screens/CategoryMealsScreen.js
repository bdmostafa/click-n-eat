import React from "react";
import { StyleSheet } from "react-native";
import { MealList } from "../components/MealList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

export const CategoryMealsScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");

  const MealsToBeDisplayed = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={MealsToBeDisplayed} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  return {
    headerTitle: selectedCategory.title,
  };
};
