import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import FavoritesHeaderButton from '../components/FavoritesHeaderButton';

const MealDetailScreen = props => {
    const item = props.navigation.getParam("item")

    return (
        <View style={styles.container}>
            <Text style={styles.font}>{item.title}</Text>
            <Button title="Home" onPress={()=>{
                props.navigation.popToTop()
            }}/>
        </View>
    )
}

MealDetailScreen.navigationOptions = navData => {
    const item = navData.navigation.getParam("item");
   
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