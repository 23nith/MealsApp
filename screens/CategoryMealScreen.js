import React from 'react';
import {FlatList} from 'react-native';
import MealsGridTile from '../components/MealsGridTile';
// import {MEALS} from '../data/dummy-data';
import {useSelector} from 'react-redux';

const CategoryMealScreen = props => {
    const id = props.navigation.getParam('id');
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    // const mealList = MEALS.filter(item => {
    //     return item.categoryIds.indexOf(id) !== -1
    // })
    const mealList = availableMeals.filter(item => {
        return item.categoryIds.indexOf(id) !== -1
    })
    const renderGridItem = itemData => {
        return (
            <MealsGridTile
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: "MealDetails",
                        params: {
                            item: itemData.item,
                            mealId: itemData.item.id,
                            color: props.navigation.getParam('color')
                        }
                    })
                }}
            />
        )
    }
    return (
            <FlatList
                data={mealList}
                renderItem={renderGridItem}
            />
    )
}

CategoryMealScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('mealTitle'),
        headerStyle: {
            backgroundColor: navData.navigation.getParam('color'),
        }
    }
}



export default CategoryMealScreen;