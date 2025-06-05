import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Switch, Image, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'react-router-dom';

export default function AjouterProduit() {
    const [nom, setNom] = useState('');
    const [categorie, setCategorie] = useState('');
    const [quantite, setQuantite] = useState('');
    const [uniteQuantite, setUniteQuantite] = useState('kg');
    const [venduPar, setVenduPar] = useState('');
    const [uniteVente, setUniteVente] = useState('g');
    const [prix, setPrix] = useState('');
    const [isBio, setIsBio] = useState(false);
    const [description, setDescription] = useState('');

    const handleSubmit = async () => {
        const produitData = {
            nom,
            categorie,
            quantite: parseFloat(quantite),
            uniteQuantite,
            venduPar: parseFloat(venduPar),
            uniteVente,
            prix: parseFloat(prix),
            bio: isBio,
            description,
        };

        try {
            const response = await fetch('http://localhost:8000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produitData),
            });

            if (response.ok) {
                console.log('Produit ajouté avec succès !');
            } else {
                console.error('Erreur lors de l’ajout du produit');
            }
        } catch (error) {
            console.error('Erreur réseau :', error);
        }

        console.log("CA MARCHE !!!!!!!!!!!!!");
    };


    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                    accessibilityLabel="Retour"
                >
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Ajouter un produit</Text>
            </View>

            <TouchableOpacity style={styles.imagePlaceholder}>
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Nom du produit</Text>
            <TextInput style={styles.input} value={nom} onChangeText={setNom} />

            <Text style={styles.label}>Catégorie</Text>
            <View style={styles.pickerContainer}>
                <Picker selectedValue={categorie} onValueChange={setCategorie}>
                <Picker.Item label="Légumes" value="Légumes" />
                <Picker.Item label="Fruits" value="Fruits" />
                </Picker>
            </View>

            <Text style={styles.label}>Quantité disponible</Text>
            <View style={styles.row}>
                <TextInput
                style={[styles.input, styles.halfInput]}
                keyboardType="numeric"
                value={quantite}
                onChangeText={setQuantite}
                />
                <View style={[styles.pickerContainer, styles.halfInput]}>
                <Picker selectedValue={uniteQuantite} onValueChange={setUniteQuantite}>
                    <Picker.Item label="kg" value="kg" />
                    <Picker.Item label="g" value="g" />
                </Picker>
                </View>
            </View>

            <Text style={styles.label}>Vendu par</Text>
            <View style={styles.row}>
                <TextInput
                style={[styles.input, styles.halfInput]}
                keyboardType="numeric"
                value={venduPar}
                onChangeText={setVenduPar}
                />
                <View style={[styles.pickerContainer, styles.halfInput]}>
                <Picker selectedValue={uniteVente} onValueChange={setUniteVente}>
                    <Picker.Item label="g" value="g" />
                    <Picker.Item label="kg" value="kg" />
                </Picker>
                </View>
            </View>

            <Text style={styles.label}>Prix unitaire (en €)</Text>
            <TextInput
                style={styles.input}
                keyboardType="decimal-pad"
                value={prix}
                onChangeText={setPrix}
            />

            <View style={styles.bioContainer}>
                <Switch value={isBio} onValueChange={setIsBio} />
                <Text style={styles.bioText}>Bio</Text>
            </View>

            <Text style={styles.label}>Description</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                multiline
                numberOfLines={4}
                value={description}
                onChangeText={setDescription}
                placeholder="Décrivez en quelques mots votre commerce"
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Ajouter le produit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#F7F7F7',
        marginBottom: 80
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    backButton: { width: 32, alignItems: 'flex-start' },
    backText: { fontSize: 24 },
    title: { flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 'bold' },
    imagePlaceholder: {
        height: 120,
        width: 120,
        borderRadius: 12,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20,
    },
    plus: {
        fontSize: 30,
        color: '#888',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: '#6DC24B',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#6DC24B',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    halfInput: {
        flex: 1,
    },
    bioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    bioText: {
        marginLeft: 10,
        fontSize: 16,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#6DC24B',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
