import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Inscription(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (name: string, value: string) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://121.0.0.1:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Inscription réussie:', data);
                // Rediriger ou afficher un message de succès
            } else {
                console.error('Erreur lors de l\'inscription:', response.statusText);
                // Gérer les erreurs
            }
        } catch (error) {
            console.error('Erreur réseau:', error);
        }
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign-in logic here
    };

    const handleAppleSignIn = () => {
        // Handle Apple sign-in logic here
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Créer un compte</Text>
                <View style={styles.row}>
                    <View style={styles.inputContainer}>
                        <Text>Prénom</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Prénom"
                            value={formData.firstName}
                            onChangeText={(value) => handleChange('firstName', value)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text>Nom</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nom"
                            value={formData.lastName}
                        onChangeText={(value) => handleChange('lastName', value)}
                    />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text>Adresse mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={formData.email}
                        onChangeText={(value) => handleChange('email', value)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text>Mot de passe</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Mot de passe"
                        secureTextEntry
                        value={formData.password}
                        onChangeText={(value) => handleChange('password', value)}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    {/* <Text style={styles.buttonText}>S'inscrire</Text> */}
                    <Link href={'/(tabs)/consommateurs/verification_mail'}>S'inscrire</Link>
                </TouchableOpacity>
                <Link href={'/consommateurs/connexion'}>J'ai déjà un compte</Link>
            </View>
            <View style={styles.divider} />
            <View style={styles.socialLogin}>
                <TouchableOpacity style={styles.socialButton} onPress={handleGoogleSignIn}>
                    <Text>Se connecter avec Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton} onPress={handleAppleSignIn}>
                    <Text>Se connecter avec Apple</Text>
                </TouchableOpacity>
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputContainer: {
        flex: 1,
        marginBottom: 16,
        marginHorizontal: 4,
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
    divider: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 16,
    },
    socialLogin: {
        marginTop: 20,
        textAlign: 'center',
    },
    socialButton: {
        backgroundColor: '#d3d3d3',
        borderRadius: 12,
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
});