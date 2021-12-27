import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Colors";
import { CategoriesScreen } from "../screens/CategoriesScreen";
import { CategoryMealsScreen } from "../screens/CategoryMealsScreen";
import { MealDetailScreen } from "../screens/MealDetailScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { FilterScreen } from "../screens/FilterScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

const defaultStackNavOptions = {
  headerTitle: "Click N Eat",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitlesStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

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
    defaultNavigationOptions: defaultStackNavOptions,

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

const FavoriteNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // initialRouteName: FavoritesScreen,
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: FilterScreen,
  },
  {
    // navigationOptions: {
    //   drawerLabel: "Filters..."
    // },
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}> Meals </Text>
        ) : (
          "Meals"
        ),
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorite: {
    screen: FavoriteNavigator,
    navigationOptions: {
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}> Favorite </Text>
        ) : (
          "Favorite"
        ),
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const MealsFavoriteTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
        // barStyle does not work if tabBarColor is applied on navigationOptions
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
          activeTintColor: Colors.accentColor,
        },
      });

const MainNavigator = createDrawerNavigator(
  {
    MealsFavorite: {
      screen: MealsFavoriteTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filter: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
