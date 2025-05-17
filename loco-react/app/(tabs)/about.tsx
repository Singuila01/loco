import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function About() {
    return (
        <View style={style.container}>
            <Text style={style.text}>A propos</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 40
    },
    text: {
        color: 'white',
        backgroundColor: 'red',
        fontSize: 25,
        padding: 10,
        fontWeight: 900
    }
})