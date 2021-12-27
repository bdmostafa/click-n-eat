import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Colors";
import { CategoriesScreen } from "../screens/CategoriesScreen";
import { CategoryMealsScreen } from "../screens/CategoryMealsScreen";
import { MealDetailScreen } from "../screens/MealDetailScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FavoritesScreen } from "../screens/FavoritesScreen";

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

    // defaultNavigationOptions that merges with the screens
    defaultNavigationOptions: {
      headerTitle: "Click N Eat",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },

    // navigationOptions configure the nested navigator
    // that can be used in createBottomTabNavigator also
    // navigationOptions: {
    //   tabBarIcon: (tabInfo) => {
    //     return (
    //       <Ionicons name="restaurant" size={25} color={tabInfo.tintColor} />
    //     );
    //   },
    // },
  }
);

const MealsFavoriteTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        // tabBarLabel: "Meals",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="restaurant" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Favorite: {
      screen: FavoritesScreen,
      navigationOptions: {
        // tabBarLabel: "Favorites!",
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="star" size={25} color={tabInfo.tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);

export default createAppContainer(MealsFavoriteTabNavigator);
