import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, Text, Switch} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButtons from '../components/CustomHeaderButtons';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/meals';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch 
                value={props.value} 
                onValueChange={props.onChange}/>
        </View>
    )    
}

const FilterScreen = props => {
    const {navigation} = props
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            isVegetarian: isVegetarian
        }

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch])

    useEffect(() => {
        navigation.setParams({
            save: saveFilters
        })
    }, [saveFilters]);

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label='Gluten-Free'
                value={isGlutenFree}
                onChange={ newValue => 
                    setIsGlutenFree(newValue)
                }
            />
            <FilterSwitch 
                label="Vegan"
                value={isVegan}
                onChange={newValue=> 
                    setIsVegan(newValue)
                }
            />
            <FilterSwitch 
                label="Vegetarian"
                value={isVegetarian}
                onChange={newValue=> 
                    setIsVegetarian(newValue)
                }
            />
            <FilterSwitch 
                label="Lactose-Free"
                value={isLactoseFree}
                onChange={newValue=> 
                    setIsLactoseFree(newValue)
                }
            />
        </View>
    )
}

FilterScreen.navigationOptions = navData => {
    return {
        headerTitle: "Filter",
        // headerStyle: {
        //     backgroundColor: "blue"
        // },
        headerLeft:  () => {
            return (  
                <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
                    <Item
                        title="Menu"
                        iconName="ios-menu"
                        onPress={() => {
                            navData.navigation.toggleDrawer();
                        }}
                    />
                </HeaderButtons>
            )
        },
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
                    <Item
                        title="Save"
                        iconName="ios-save"
                        onPress={navData.navigation.getParam('save')}
                    />      
                </HeaderButtons>
            )
        }
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    }
})

export default FilterScreen;