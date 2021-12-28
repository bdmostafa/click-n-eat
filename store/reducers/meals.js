import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, { type, mealId, filters }) => {
  switch (type) {
    case TOGGLE_FAVORITE:
      const existingIdx = state.favoriteMeals.findIndex(
        (meal) => meal.id === mealId
      );

      if (existingIdx >= 0) {
        const updatedFavoriteMeals = [...state.favoriteMeals];
        updatedFavoriteMeals.splice(existingIdx, 1);
        return { ...state, favoriteMeals: updatedFavoriteMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal),
        };
      }
    case SET_FILTERS:
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (filters.isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (filters.isVegan && !meal.isVegan) {
          return false;
        }
        if (filters.isVegetarian && !meal.isVegetarian) {
          return false;
        }
        if (filters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
