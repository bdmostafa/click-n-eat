import React from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dummy-data";

export const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          // navigation.navigate({ routeName: "CategoryMeals" });
          navigation.navigate("CategoryMeals");
          // navigation.push("CategoryMeals");
          // navigation.replace('CategoryMeals')
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
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
