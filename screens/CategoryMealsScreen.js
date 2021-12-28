import React from "react";
import { MealList } from "../components/MealList";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";

export const CategoryMealsScreen = ({ navigation }) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const categoryId = navigation.getParam("categoryId");

  const MealsToBeDisplayed = availableMeals.filter(
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
