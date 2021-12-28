// import React from "react";
import { MealList } from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../components/CustomHeaderButton";
import { useSelector } from "react-redux";

export const FavoritesScreen = ({ navigation }) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  return <MealList listData={favoriteMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Favorite Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};