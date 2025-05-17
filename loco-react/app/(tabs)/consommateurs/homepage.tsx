import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
    const navigation = useNavigation();

    const categories = [
        { id: '1', name: 'Fruits', image: 'https://via.placeholder.com/50' },
        { id: '2', name: 'Légumes', image: 'https://via.placeholder.com/50' },
        { id: '3', name: 'Produits laitiers', image: 'https://via.placeholder.com/50' },
    ];

    const popularProducts = [
        { id: '1', name: 'Pomme', image: 'https://via.placeholder.com/50' },
        { id: '2', name: 'Carotte', image: 'https://via.placeholder.com/50' },
        { id: '3', name: 'Fromage', image: 'https://via.placeholder.com/50' },
    ];

    const nearbyProducers = [
        { id: '1', name: 'Ferme de la Vallée', image: 'https://via.placeholder.com/50' },
        { id: '2', name: 'Jardin Bio', image: 'https://via.placeholder.com/50' },
        { id: '3', name: 'Domaine du Soleil', image: 'https://via.placeholder.com/50' },
    ];

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View>
                    <View>
                        {/* <Image source={{ uri: item.image }} style={styles.producerImage} /> */}
                    </View>
                    <View>
                        <Text style={styles.city}>Paris</Text>
                        <Text style={styles.address}>123 Rue Fictive</Text>
                    </View>
                </View>
                {/* <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
                    <Text style={styles.cartText}>Panier</Text>
                </TouchableOpacity> */}
            </View>

            {/* Search Bar */}
            <TextInput style={styles.searchBar} placeholder="Rechercher..." />

            {/* Categories */}
            <View>
                <Text style={styles.sectionTitle}>Catégories</Text>
                <FlatList
                    data={categories}
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.categoryItem}>
                            <Image source={{ uri: item.image }} style={styles.categoryImage} />
                            <Text style={styles.categoryText}>{item.name}</Text>
                        </View>
                    )}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            {/* Popular Products */}
            <View>
                <Text style={styles.sectionTitle}>Produits Populaires</Text>
                <FlatList
                    data={popularProducts}
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.productItem}>
                            <Image source={{ uri: item.image }} style={styles.productImage} />
                            <Text style={styles.productText}>{item.name}</Text>
                        </View>
                    )}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            {/* Nearby Producers */}
            <View>
                <Text style={styles.sectionTitle}>Producteurs à proximité</Text>
                <FlatList
                    data={nearbyProducers}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.producerItem}>
                            <Image source={{ uri: item.image }} style={styles.producerImage} />
                            <Text style={styles.producerText}>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    city: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    address: {
        fontSize: 14,
        color: '#555',
    },
    cartButton: {
        backgroundColor: '#007BFF',
        padding: 8,
        borderRadius: 8,
    },
    cartText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    searchBar: {
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        padding: 8,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 8,
        marginTop: 30,
    },
    categoryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 30,
        padding: 8,
        marginRight: 8,
    },
    categoryImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 8,
    },
    categoryText: {
        fontSize: 16,
    },
    productItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 30,
        padding: 8,
        marginRight: 8,
    },
    productImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 8,
    },
    productText: {
        fontSize: 16,
    },
    producerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 30,
        padding: 8,
        marginBottom: 8,
    },
    producerImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 8,
    },
    producerText: {
        fontSize: 16,
    },
});

export default Homepage;