import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const FavoritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Favorite Meals</Text>
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
