import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const VerificationMail = () => {
    const [code, setCode] = useState('');

    const handleVerifyCode = () => {
        if (code.trim() === '') {
            Alert.alert('Erreur', 'Veuillez entrer un code.');
        } else {
            // Logique de vérification du code
            Alert.alert('Succès', 'Code vérifié avec succès !');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Vérification de l'email</Text>
                <Text style={styles.subtitle}>Veuillez entrer le code reçu par email :</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Entrez le code"
                    placeholderTextColor="#888"
                    value={code}
                    onChangeText={setCode}
                    keyboardType="numeric"
                />
                <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
                    {/* <Text style={styles.buttonText}>Valider</Text> */}
                </TouchableOpacity>
                <Link href={'/consommateurs/homepage'} style={styles.buttonText}>Valider</Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        width: '100%',
        maxWidth: 500,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
    },
    form: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,
        marginBottom: 8,
        marginTop: 8,   
    },
    button: {
        backgroundColor: '#a9a9a9',
        borderRadius: 12,
        padding: 10,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default VerificationMail;