import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface Product {
    id: string;
    name: string;
    distance: string;
    rating: number;
    merchant: string;
    price: string;
    image: string;
}

const products: Product[] = [
    {
        id: '1',
        name: 'Produit 1',
        distance: '2 km',
        rating: 4.5,
        merchant: 'Commerçant A',
        price: '10€',
        image: 'https://via.placeholder.com/100',
    },
    {
        id: '2',
        name: 'Produit 2',
        distance: '5 km',
        rating: 4.0,
        merchant: 'Commerçant B',
        price: '15€',
        image: 'https://via.placeholder.com/100',
    },
    // Ajoutez d'autres produits ici
];

const Catalogue: React.FC = () => {
    const [sortedProducts, setSortedProducts] = useState<Product[]>(products);

    const sortProducts = (criteria: 'price' | 'distance' | 'rating') => {
        const sorted = [...products].sort((a, b) => {
            if (criteria === 'price') {
                return parseFloat(a.price) - parseFloat(b.price);
            } else if (criteria === 'distance') {
                return parseFloat(a.distance) - parseFloat(b.distance);
            } else if (criteria === 'rating') {
                return b.rating - a.rating;
            }
            return 0;
        });
        setSortedProducts(sorted);
    };

    const renderProduct = ({ item }: { item: Product }) => (
        <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDistance}>{item.distance}</Text>
                <Text style={styles.productRating}>
                    {item.rating} étoiles - {item.merchant}
                </Text>
                <Text style={styles.productPrice}>{item.price}</Text>
            </View>
            <View style={styles.productActions}>
                <TouchableOpacity style={styles.favoriteButton}>
                    <Text style={styles.buttonText}>Favori</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewButton}>
                    <Text style={styles.buttonText}>Voir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.sortButtons}>
                <TouchableOpacity onPress={() => sortProducts('price')} style={styles.sortButton}>
                    <Text>Prix</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sortProducts('distance')} style={styles.sortButton}>
                    <Text>Distance</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sortProducts('rating')} style={styles.sortButton}>
                    <Text>Pertinence</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={sortedProducts}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    sortButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    sortButton: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 5,
    },
    productContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        overflow: 'hidden',
    },
    productImage: {
        width: 100,
        height: '100%',
    },
    productDetails: {
        flex: 1,
        padding: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productDistance: {
        fontSize: 14,
        color: '#666',
    },
    productRating: {
        fontSize: 14,
        color: '#666',
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    productActions: {
        justifyContent: 'space-around',
        padding: 10,
    },
    favoriteButton: {
        backgroundColor: '#ffcccb',
        padding: 10,
        borderRadius: 5,
    },
    viewButton: {
        backgroundColor: '#add8e6',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default Catalogue;