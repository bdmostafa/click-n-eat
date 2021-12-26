import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Screen!</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          // navigation.navigate({ routeName: "CategoryMeals" });
          navigation.navigate("CategoryMeals");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
