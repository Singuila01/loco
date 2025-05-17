import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

export default function Index() {
    return (
        <View style={styles.container}>
            <Link href="/commercants">Commerçant</Link>
            <Link href="/consommateurs/connexion">Consommateur</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'flex-end', // Place les liens en bas
        alignItems: 'center',
        paddingBottom: 20, // Ajoute une marge en bas
    },
    button: {
        width: '90%', // Les boutons prennent presque toute la largeur
        marginBottom: 10, // Ajoute une marge entre les boutons
        paddingVertical: 15,
        backgroundColor: '#d3d3d3', // Fond gris pour les boutons
        borderRadius: 8,
        alignItems: 'center',
    },
    link: {
        fontWeight: 500,
        color: '#000',
        textAlign: 'center',
        textDecorationLine: 'none',
        // fontWeight: 'bold',
    },
});