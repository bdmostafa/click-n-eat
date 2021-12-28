import React from "react";
import { MealList } from "../components/MealList";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { DefaultText } from "../components/DefaultText";
import Colors from "../constants/Colors";

export const CategoryMealsScreen = ({ navigation }) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const categoryId = navigation.getParam("categoryId");

  const mealsToBeDisplayed = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (mealsToBeDisplayed.length === 0 || !mealsToBeDisplayed) {
    return (
      <View style={styles.screen}>
        <DefaultText>No meals found. </DefaultText>
        <DefaultText>
          Please check your <Text style={styles.text}> FILTERS! </Text>{" "}
        </DefaultText>
      </View>
    );
  }

  return <MealList listData={mealsToBeDisplayed} navigation={navigation} />;
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "open-sans-bold",
    color: Colors.primaryColor,
  },
});
