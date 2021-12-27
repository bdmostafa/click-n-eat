import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CategoryGrid } from "../components/CategoryGrid";
import Colors from "../constants/Colors";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dummy-data";

export const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = ({ item: { id, title, color } }) => {
    return (
      <CategoryGrid
        title={title}
        color={color}
        onSelect={() => {
          navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: id,
            },
          });
          // navigation.navigate("CategoryMeals", { categoryId: id });

          // push is used if a same page comes with folder expanding like Dropbox
          // navigation.push("CategoryMeals");

          // replace is used when the previous page is not needed anymore like login/registration page
          // navigation.replace('CategoryMeals')
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  // headerStyle: {
  //   backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  // },
  // headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
