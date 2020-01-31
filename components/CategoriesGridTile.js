import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CategoriesGridTile = props => {
    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={props.onSelect}>
                <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                    <Text style={styles.font}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 15,
        borderRadius: 10,
        overflow: "hidden"
    },
    container: {
        flex: 1,
        height: 150, 
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    font: {
        fontSize: 20
    }
})

export default CategoriesGridTile;