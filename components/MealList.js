import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

export const MealList = ({ listData, navigation }) => {
  const renderMealItem = ({
    item: { id, title, imageUrl, duration, complexity, affordability },
  }) => {
    return (
      <MealItem
        title={title}
        image={imageUrl}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: id,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
