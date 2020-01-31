import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import CategoriesGridTile from '../components/CategoriesGridTile';
import {CATEGORIES} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButtons from '../components/CustomHeaderButtons';

const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
            <CategoriesGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: "CategoryMeal",
                        params: {
                            mealTitle: itemData.item.title,
                            color: itemData.item.color,
                            id: itemData.item.id
                        }
                    })
                }}
            />
        )
    }
    return (
        <View>
            <FlatList
                data={CATEGORIES}
                renderItem={renderGridItem}
                numColumns={2}
            />
        </View>
    )
}

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: "Categories",
        headerLeft: (
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

export default CategoriesScreen;