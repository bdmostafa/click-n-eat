import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Colors";
import { CategoriesScreen } from "../screens/CategoriesScreen";
import { CategoryMealsScreen } from "../screens/CategoryMealsScreen";
import { MealDetailScreen } from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: {
      screen: MealDetailScreen,
      // navigationOptions: {
      //   headerTitle: "Meal Detail"
        // headerStyle: {
        //   backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        // },
        // headerTintColor:
        //   Platform.OS === "android" ? "white" : Colors.primaryColor,
      // }
    },
  },
  {
    // mode: "modal",
    // initialRouteName: "Categories",
    defaultNavigationOptions: {
      headerTitle: "Click N Eat",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(MealsNavigator);
