import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

type Product = {
    id: string;
    nom_produit: string;
    description_produit: string;
    prix_produit: number;
};

type Category = {
    id: string;
    nom_categorie: string;
    description_categorie: string;
}

const API_URL = 'http://127.0.0.1:8000/api'; // Remplace par l'URL de ton API

const popularProducts = null;

// const popularProducts = [
//     {
//         id: '1',
//         name: 'Baguette Tradition',
//         price: 1.20,
//         image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
//     },
//     {
//         id: '2',
//         name: 'Croissant',
//         price: 0.90,
//         image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
//     },
//     {
//         id: '3',
//         name: 'Pain Complet',
//         price: 1.50,
//         image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
//     },
//     {
//         id: '4',
//         name: 'Baguette Tradition',
//         price: 1.20,
//         image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
//     },
//     {
//         id: '5',
//         name: 'Croissant',
//         price: 0.90,
//         image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
//     },
//     {
//         id: '6',
//         name: 'Pain Complet',
//         price: 1.50,
//         image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
//     },
// ];

// const categories = [
//     { id: 'cat1', name: 'Pains', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' },
//     { id: 'cat2', name: 'Viennoiseries', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' },
//     { id: 'cat3', name: 'Pâtisseries', image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80' },
//     { id: 'cat3', name: 'Pâtisseries', image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80' },
//     { id: 'cat4', name: 'Pâtisseries', image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80' },
//     { id: 'cat5', name: 'Pâtisseries', image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80' },
// ];

export default function Homepage() {
    const [data, setData] = useState<Product[] | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${API_URL}/products`);
                if (!response.ok) throw new Error('Erreur lors du chargement');
                const data = await response.json();
                setProducts(data);
                console.log(data);
                console.log("Nombre de données: " + data.length);
            } catch (err: any) {
                setError(err.message || 'Erreur inconnue');
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
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
    const navigation = useNavigation();

    const handleProductPress = (product: typeof popularProducts[]) => {
        // navigation.navigate('ProductDetail', { productId: product.id });
    };

    if (loading) {
        return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.loadingText}>Chargement des données...</Text>
        </View>
        );
    }

    if (error) {
        return (
        <View style={styles.container}>
            <Text style={styles.errorText}>Erreur: {error}</Text>
        </View>
        );
    }

    // if (data) {
    //     return (
    //     <View style={styles.container}>
    //         <FlatList
    //         data={data}
    //         keyExtractor={(item) => item.id.toString()}
    //         renderItem={({ item }) => (
    //             <View>
    //             <Text>{item.nom_produit}</Text>
    //             {/* Affiche d'autres propriétés de l'objet item ici */}
    //             </View>
    //         )}
    //         />
    //     </View>
    //     );
    // }

    return (
        <ScrollView style={styles.container}>
            {/* Position */}
            <View style={styles.positionContainer}>
                <Text style={styles.positionText}>123 Rue de Paris, 75001 Paris</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Rechercher un produit..."
                    style={styles.searchInput}
                    placeholderTextColor="#888"
                />
            </View>

            {/* Popular Products */}
            <Text style={styles.sectionTitle}>Produits populaires</Text>
            { products ?
                <FlatList
                data={products}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingLeft: 16, paddingBottom: 8 }}
                renderItem={({ item }) => (
                    <View style={styles.productCard}>
                        <View style={{ position: 'relative', width: '100%', height: 225, marginBottom: 8, backgroundColor: '#596548', borderRadius: 12, overflow: 'hidden' }}>
                            {/* <Image source={{ uri: item.image }} style={{ ...StyleSheet.absoluteFillObject, borderRadius: 12 }} resizeMode="cover" /> */}
                            <View style={{ position: 'absolute', bottom: 8, left: 8, right: 8, backgroundColor: '#fff', borderRadius: 12, padding: 8, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#000', fontWeight: '700', fontSize: 15, textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 2 }}>
                                    {item.nom_produit}                                   
                                </Text>
                                <Text style={{ color: '#000', fontWeight: '500', fontSize: 14, textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 2 }}>
                                    {item.prix_produit} €
                                </Text>
                            </View>
                        </View>
                    </View>
                    // <TouchableOpacity style={styles.productCard} onPress={() => handleProductPress(item)}>
                        
                    // </TouchableOpacity>
                )}
            />
            : <Text style={styles.loadingText}>Aucun produit trouvé</Text>}
            

            {/* Categories */}
            <Text style={styles.sectionTitle}>Catégories</Text>
            <View style={styles.categoriesContainer}>

                {categories.map(cat => (
                    <TouchableOpacity
                        key={cat.id}
                        style={styles.categoryCard}
                        // onPress={() => navigation.navigate('ProductDetail', { categoryId: cat.id })}
                    >
                        {/* <Image source={{ uri: cat.image }} style={styles.categoryImage} /> */}
                        <Text style={styles.categoryName}>{cat.nom_categorie}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6FA',
    },
    positionContainer: {
        paddingTop: 32,
        paddingHorizontal: 16,
        paddingBottom: 8,
    },
    positionText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    searchContainer: {
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    searchInput: {
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 12,
        fontSize: 16,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#222',
        marginLeft: 16,
        marginBottom: 8,
        marginTop: 12,
    },
    productCard: {
        borderRadius: 16,
        marginRight: 16,
        padding: 12,
        alignItems: 'center',
        width: 350,
        elevation: 2,
    },
    productImage: {
        width: 100,
        height: 80,
        borderRadius: 12,
        marginBottom: 8,
    },
    productName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 14,
        color: '#888',
        fontWeight: '500',
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 8,
        marginBottom: 24,
        paddingHorizontal: 8,
    },
    categoryCard: {
        alignItems: 'center',
        width: 100,
    },
    categoryImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 6,
    },
    categoryName: {
        fontSize: 14,
        color: '#444',
        fontWeight: '500',
        textAlign: 'center',
    },
    loadingText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 90,
    },
    errorText: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
        marginTop: 90,
    },
});