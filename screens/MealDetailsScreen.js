import React, {useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import FavoritesHeaderButton from '../components/FavoritesHeaderButton';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../store/actions/meals';

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam("mealId");
    const availableMeals = useSelector(meal => meal.meals.meals);
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler})
    }, [toggleFavoriteHandler] );

    return (

        <View style={styles.container}>
            <Text>{selectedMeal.title}</Text>
            <Button
                title="Go Back to Categories"
                onPress={() => {
                    props.navigation.popToTop();
                }}
            />
        </View>
    )
}

MealDetailScreen.navigationOptions = navData => {
    const mealTitle = navData.navigation.getParam("mealTitle");
    const toggleFavorite = navData.navigation.getParam('toggleFav');


    return {
        headerTitle: mealTitle,
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={FavoritesHeaderButton}>
                    <Item
                        title="Favorite"
                        iconName="ios-star"
                        onPress={toggleFavorite}
                    />
                </HeaderButtons>
            )
        },
        headerStyle: {
            backgroundColor: navData.navigation.getParam('color')
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    font: {
        fontSize: 25,
        marginVertical: 10
    }
})

export default MealDetailScreen;