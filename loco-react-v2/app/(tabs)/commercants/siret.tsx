import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Link } from 'expo-router';

const SiretScreen: React.FC = () => {
    const [siret, setSiret] = useState('');
    const [documentName, setDocumentName] = useState<string | null>(null);

    const handlePickDocument = async () => {
        const result = await DocumentPicker.getDocumentAsync({});
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setDocumentName(result.assets[0].name);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerBox}>
                <Text style={styles.label}>Numéro de SIRET</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Entrez votre numéro de SIRET"
                    keyboardType="numeric"
                    value={siret}
                    onChangeText={setSiret}
                />

                <TouchableOpacity style={styles.uploadButton} onPress={handlePickDocument}>
                    <Text style={styles.uploadButtonText}>
                        {documentName ? `Document: ${documentName}` : 'Importer un document'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Suivant</Text>
                    <Link href="">Suivant</Link>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SiretScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#27ae60', // Vert
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerBox: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 28,
        padding: 24,
        alignItems: 'stretch',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#222',
        fontWeight: '500',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 16,
        padding: 12,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: '#fafafa',
    },
    uploadButton: {
        backgroundColor: '#f1f1f1',
        borderRadius: 16,
        padding: 14,
        alignItems: 'center',
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    uploadButtonText: {
        color: '#27ae60',
        fontWeight: '600',
    },
    nextButton: {
        backgroundColor: '#27ae60',
        borderRadius: 16,
        paddingVertical: 14,
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
});