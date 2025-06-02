import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';

export default function Inscription() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');

    const handleSubmit = () => {
        // Traitez la connexion ici
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.inner}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Créer un compte Consommateur</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', gap: 10, boxSizing: 'border-box' }}>
                        <View style={{ display: 'flex', flexDirection: 'column', width: '50%', boxSizing: 'border-box', gap: 10 }}>
                            <Text>Nom</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nom"
                                value={nom}
                                onChangeText={setNom}
                                autoCapitalize="words"
                            />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', width: '50%', boxSizing: 'border-box', gap: 10 }}>
                            <Text>Prénom</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Prénom"
                                value={prenom}
                                onChangeText={setPrenom}
                                autoCapitalize="words"
                            />
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', width: '100%', boxSizing: 'border-box', gap: 10 }}>
                        <Text>Adresse mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Adresse mail"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', width: '100%', boxSizing: 'border-box', gap: 10 }}>
                        <Text>Mot de passe</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Mot de passe"
                            value={motDePasse}
                            onChangeText={setMotDePasse}
                            secureTextEntry
                        />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', width: '100%', boxSizing: 'border-box', gap: 10 }}>
                        <Text>Confirmation de mot de passe</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Mot de passe"
                            value={motDePasse}
                            onChangeText={setMotDePasse}
                            secureTextEntry
                        />
                    </View>
                    {/* <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>S'inscrire</Text>
                    </TouchableOpacity> */}
                    <Link href="/consommateurs/connexion" style={styles.conn}>J'ai déjà un compte ? Se connecter</Link>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4CBB17',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#000',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 48,
        borderColor: '#4CBB17',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
        color: '#000',
    },
    button: {
        backgroundColor: '#4CBB17',
        paddingVertical: 14,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    conn: {
        paddingTop: 20,
    }
});