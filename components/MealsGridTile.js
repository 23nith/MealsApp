import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

const MealsGridTile = props => {
    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={props.onSelect}>
                <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                    <View style={styles.container}>
                        <Text>
                            {props.title}
                        </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 15,
        borderRadius: 10,
        width: "90%",
        alignItems: "center"
    },
    container: {
        flex: 1,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20
    },
    bgImage: {
        width: 340,
        height: 120,
        overflow: "hidden",
    }
})

export default MealsGridTile;