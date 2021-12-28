import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, { type, mealId }) => {
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

    default:
      return state;
  }
};

export default mealsReducer;
