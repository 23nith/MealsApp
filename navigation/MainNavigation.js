import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Ionicons} from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';

const MainNavigation = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeal: {
        screen: CategoryMealScreen
    },
    MealDetails: {
        screen: MealDetailsScreen
    }
})

const FavoriteStack = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen
    },
    MealDetails: {
        screen: MealDetailsScreen
    }
})

const TabNavigator = createBottomTabNavigator({
    mealStack: {
        screen: MainNavigation,
        navigationOptions: {
            tabBarLabel: "Meals",
            tabBarIcon: tabBarInfo => {
                return (
                    <Ionicons
                        name="ios-restaurant"
                        size={23}
                        color={tabBarInfo.tintColor}
                    />
                )
            }
        }
    },
    FavoritesStack: {
        screen: FavoriteStack,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: tabBarInfo => {
                return (
                    <Ionicons 
                        name="ios-star"
                        size={23}
                        color={tabBarInfo.tintColor}
                    />
                )
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: "orange"
    }
})

const FilterStack = createStackNavigator({
    Filter: {
        screen: FilterScreen,
    }
})

const DrawerNavigator = createDrawerNavigator({
    Main: TabNavigator,
    Filter: FilterStack
})

export default createAppContainer(DrawerNavigator);