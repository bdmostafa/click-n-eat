// import React from "react";
import { MealList } from "../components/MealList";
import { MEALS } from "../data/dummy-data";

export const FavoritesScreen = ({ navigation }) => {
  const FavoriteMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );
  return <MealList listData={FavoriteMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites'
};