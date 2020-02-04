import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE, SET_FILTERS} from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITE: 
            const existingIndex = state.favoriteMeals.findIndex(
                meal => meal.id === action.mealId 
                );
            if (existingIndex >= 0 ) {
                // if it is already included in the favoriteMeals
                // copy favoriteMeal array as new array
                const updatedFavMeals = [...state.favoriteMeals];
                // remove the meal from the array copy
                updatedFavMeals.splice(existingIndex, 1);
                // replace old favoriteMeals array with edited copy of said array
                return {...state, favoriteMeals: updatedFavMeals};
            } else {
                // if it is NOT yet included in the favoriteMeals
                // find the meal object in the meal sub state
                const meal = state.meals.find(meal => meal.id === action.mealId);
                // add the meal in the favoriteMeals array
                return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const udpatedFilteredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false;
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false;
                }
                if (appliedFilters.lactose && !meal.isLactose) {
                    return false;
                }
                return true;
            });
            return {...state, filteredMeals: udpatedFilteredMeals}
        default: 
            return state;
    }
    
}

export default mealsReducer;