// import React from "react";
import { MealList } from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../components/CustomHeaderButton";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { DefaultText } from "../components/DefaultText";
import Colors from "../constants/Colors";

export const FavoritesScreen = ({ navigation }) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.screen}>
        <DefaultText>No favorite meals found.</DefaultText>
        <DefaultText>
          Start adding some as <Text style={styles.text}> FAVORITE! </Text>
        </DefaultText>
      </View>
    );
  }
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: 'open-sans-bold',
    color: Colors.primaryColor
  }
});
