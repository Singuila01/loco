import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function CommercantPage() {
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
                <Text style={styles.title}>Me connecter</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
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
                <TouchableOpacity style={styles.signUpButton}>
                    {/* <Text style={styles.signUpButtonText}>S'inscrire</Text> */}
                    <Link href={'./inscription.tsx'} style={styles.signUpButtonText}>S'inscrire</Link>
                </TouchableOpacity>
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
        backgroundColor: '#f0f0f0', // Fond gris pour le formulaire
        borderRadius: 16, // Arrondi sur le formulaire
    },
    title: {
        color: '#000', // Texte noir
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
        width: '100%', // Champs prennent toute la longueur du formulaire
    },
    button: {
        backgroundColor: '#a9a9a9', // Bouton gris plus foncé
        borderRadius: 12, // Arrondi plus prononcé
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
        backgroundColor: '#d3d3d3', // Bouton pour s'inscrire
        borderRadius: 12,
        padding: 10,
        alignItems: 'center',
    },
    signUpButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
});