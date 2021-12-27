import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { CategoryGrid } from "../components/CategoryGrid";
import { CustomHeaderButton } from "../components/CustomHeaderButton";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

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

CategoriesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Meal Categories",
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
    // headerStyle: {
    //   backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    // },
    // headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
