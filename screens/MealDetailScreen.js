import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const MealDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen...</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          navigation.popToTop();
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
