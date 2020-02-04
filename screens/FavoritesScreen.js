import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButtons from '../components/CustomHeaderButtons';
import MealsGridTile from '../components/MealsGridTile';
// import {MEALS} from '../data/dummy-data';
import {useSelector} from 'react-redux';

// const favorites = MEALS.filter(meal => {
//     return meal.id === 'm1' || meal.id === 'm2'
// })

const FavoritesScreen = props => {
    const favorites = useSelector(state => state.meals.favoriteMeals);
    if(favorites.length === 0 || !favorites){
        return (
            <View style={styles.content}>
                <Text>There are no favorites listed. Start adding some!</Text>
            </View>
        )
    }
    const renderGridItem = itemData => {
        return (
            <MealsGridTile
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: "MealDetails",
                        params: {
                            item: itemData.item,
                            color: 'blue',
                            mealId: itemData.item.id
                        } 
                    })
                }}
            />
        )
    }
    return (
        <FlatList
            data={favorites}
            renderItem={renderGridItem}
        />
    )
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
                    <Item
                        title="Menu"
                        iconName="ios-menu"
                        onPress={()=> {
                            navData.navigation.toggleDrawer();
                        }}
                    />      
                </HeaderButtons>
            )
        }
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen;