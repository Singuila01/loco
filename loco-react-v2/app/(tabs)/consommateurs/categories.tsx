import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';

const API_URL = 'http://127.0.0.1:8000/api';

interface Category {
    nom_categorie: string;
    id: string;
    nom: string;
    // Ajoutez d'autres propriétés selon la structure de vos catégories
}

const popularProducts = null;

export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${API_URL}/categories`);
                if (!response.ok) throw new Error('Erreur lors du chargement');
                const data = await response.json();
                setCategories(data);
                console.log(data);
                console.log("Nombre de données: " + data.length);
            } catch (err: any) {
                setError(err.message || 'Erreur inconnue');
            } finally {
                setLoading(false);
            }
        };
        fetchCategory();
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Produits</Text>
                <FlatList
                    data={categories}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.categoriesCard}>
                            <Text>{item.nom_categorie}</Text>
                        </View>
                    )}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 20, 
        paddingTop: 50, 
        paddingBottom: 120, 
        backgroundColor: '#f5f5f5',
        height: '100%',
    },
    categoriesCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    }
});