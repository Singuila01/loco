import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';

export default function ConsommateurPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Redirection ou action en cas de succès
                Alert.alert('Succès', 'Connexion réussie !');
                // Exemple : navigation vers la page principale
            } else {
                // Afficher un message d'erreur
                Alert.alert('Erreur', data.message || 'Identifiants incorrects');
            }
        } catch (error) {
            Alert.alert('Erreur', 'Une erreur est survenue. Veuillez réessayer.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Me connecter</Text>
                <Text style={styles.text}>Adresse mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.text}>Mot de passe</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>
                <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
            </View>
            <TouchableOpacity style={styles.signUpButton}>
                {/* Replace Link with a valid component or remove it */}
                <Link href={'/(tabs)/consommateurs/inscription'} style={styles.signUpButtonText}>S'inscrire</Link>
                {/* <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Lien</Text> */}
                {/* <Text style={styles.signUpButtonText}>S'inscrire</Text> */}
            </TouchableOpacity>
            {/* <Link href={}></Link> */}
        </View>
    );
}

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
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    form: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
        width: '100%', // Champs prennent toute la longueur du formulaire
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
    forgotPassword: {
        color: '#000',
        textAlign: 'center',
        marginBottom: 16,
        textDecorationLine: 'underline',
    },
    signUpButton: {
        backgroundColor: '#d3d3d3',
        borderRadius: 12,
        padding: 10,
        alignItems: 'center',
    },
    signUpButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
    text: {
        // letterSpacing: 1,
        marginTop: 8,
        marginBottom: 4,
    }
});