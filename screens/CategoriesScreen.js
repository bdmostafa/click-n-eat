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
import Colors from "../constants/Colors";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dummy-data";

export const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = ({ item: { id, title, color } }) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          // navigation.navigate({
          //   routeName: "CategoryMeals",
          //   params: {
          //     categoryId: id,
          //   },
          // });
          navigation.navigate("CategoryMeals", { categoryId: id });
          // navigation.push("CategoryMeals");
          // navigation.replace('CategoryMeals')
        }}
      >
        <View>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
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
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
