import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import FavoritesHeaderButton from '../components/FavoritesHeaderButton';
import {MEALS} from '../data/dummy-data';
import {useDispatch} from 'react-redux';

const MealDetailScreen = props => {
    // const item = props.navigation.getParam("item")
    const item = props.navigation.getParam("mealId")
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    useDispatch();
    return (
        // <View style={styles.container}>
        //     <Text style={styles.font}>{item.title}</Text>
        //     <Button title="Home" onPress={()=>{
        //         props.navigation.popToTop()
        //     }}/>
        // </View>
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
    // const item = navData.navigation.getParam("item");
    const item = navData.navigation.getParam("mealId");
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return {
        headerTitle: item.title,
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={FavoritesHeaderButton}>
                    <Item
                        title="Favorite"
                        iconName="ios-star"
                        onPress={()=> {
                            console.log("Added to favorites!")
                        }}
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