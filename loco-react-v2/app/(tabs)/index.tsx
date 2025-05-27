import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Image, Button } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import Navigation from '../navigation/navigation';
import navigation from '../navigation/navigation';

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={{uri: './assets/images/logo.jpg'}} />
                <Link href="/consommateurs/inscription" style={styles.link_comm}>Je découvre les commerces</Link>
                <Link href="/commercants/inscription" style={styles.link_con}>Je vends mes produits</Link>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#4CBB17',
        display: 'flex',
        justifyContent: 'center',
    },
    content: {
        borderRadius: 20,
        height: '50%',
        width: '80%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        padding: 20,
    },
    link_comm: {
        width: '90%',
        marginBottom: 10,
        paddingVertical: 15,
        backgroundColor: '#4CBB17',
        color: '#fff',
        borderRadius: 30,
        alignItems: 'center',
        textAlign: 'center',
        padding: 20,
    },
    link_con: {
        width: '90%',
        marginBottom: 10,
        paddingVertical: 15,
        borderColor: '#4CBB17',
        borderWidth: 2,
        borderRadius: 30,
        alignItems: 'center',
        textAlign: 'center',
    }
});