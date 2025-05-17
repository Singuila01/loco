import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

const Panier = () => {
    const [cart, setCart] = useState<Product[]>([
        {
            id: '1',
            name: 'Produit 1',
            description: 'Description du produit 1',
            price: 10.99,
            image: 'https://via.placeholder.com/50',
            quantity: 1,
        },
        {
            id: '2',
            name: 'Produit 2',
            description: 'Description du produit 2',
            price: 15.49,
            image: 'https://via.placeholder.com/50',
            quantity: 1,
        },
    ]);

    const incrementQuantity = (id: string) => {
        setCart((prevCart) =>
            prevCart.map((product) =>
                product.id === id ? { ...product, quantity: product.quantity + 1 } : product
            )
        );
    };

    const decrementQuantity = (id: string) => {
        setCart((prevCart) =>
            prevCart.map((product) =>
                product.id === id && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
    };

    const renderItem = ({ item }: { item: Product }) => (
        <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
                <Text style={styles.productPrice}>{item.price.toFixed(2)} €</Text>
            </View>
            <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    listContainer: {
        paddingBottom: 16,
    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 8,
    },
    productImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginRight: 12,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productDescription: {
        fontSize: 14,
        color: '#666',
        marginVertical: 4,
    },
    productPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        borderRadius: 4,
    },
    quantityButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    quantityText: {
        marginHorizontal: 8,
        fontSize: 16,
    },
});

export default Panier;