import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Link, useRouter } from 'expo-router';

// Remplacez cette couleur par le vert utilisé dans vos autres pages
const GREEN = '#4CBB17';

export default function Connexion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        // Ajoutez ici la logique de connexion
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.whiteBox}>
                <Text style={styles.title}>Connexion</Text>
                <View>
                    <Text>Adresse mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Adresse mail"
                        placeholderTextColor="#888"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View>
                    <Text>Mot de passe</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Mot de passe"
                        placeholderTextColor="#888"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={styles.button}>
                    <Link href="/consommateurs/homepage" style={styles.buttonText}>Se connecter</Link>
                </View>
                {/* <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => router.push('/')}>
                    <Text style={styles.link}>Mot de passe oublié ?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/consommateurs/inscription')}>
                    <Text style={styles.link}>Je n'ai pas de compte</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GREEN,
        justifyContent: 'center',
        alignItems: 'center',
    },
    whiteBox: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        alignItems: 'stretch',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#000",
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 48,
        borderColor: '#4CBB17',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        marginBottom: 16,
        color: '#000',
    },
    button: {
        backgroundColor: GREEN,
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 12,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    link: {
        color: GREEN,
        textAlign: 'center',
        marginTop: 8,
        textDecorationLine: 'underline',
        fontSize: 15,
    },
});