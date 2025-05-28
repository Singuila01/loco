import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

type Product = {
    id: string;
    nom_produit: string;
    description_produit: string;
    prix_produit: number;
};

const API_URL = 'http://127.0.0.1:8000/api';

export default function ProduitsPage() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([]);
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

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Rechercher un produit..."
                value={search}
                onChangeText={setSearch}
            />

            {products.length > 0 && (
                <FlatList
                    data={products.slice(0, 5)} // Display only the first 5 products
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                         <View style={styles.container}>
                            <View style={styles.productContainer}>
                                <Text style={styles.productName}>{item.nom_produit}</Text>
                                <Text style={styles.productBio}>
                                    {item.description_produit}
                                </Text>
                                <Text style={styles.productStore}>{item.prix_produit}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                // onPress={() => router.push(`/produit/${item.id}`)}
                            >
                                <Text style={styles.buttonText}>Voir</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}

            {/* <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, backgroundColor: "#f7f7f7", padding: 16 
    },
    searchBar: {
        borderColor: "transparent",
        height: 40,
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 12,
        marginBottom: 16,
        backgroundColor: "#fff",
    },
    list: { 
        paddingBottom: 16 
    },
    productContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 30,
        padding: 12,
        marginBottom: 12,
    },
    productImage: { width: 60, height: 60, borderRadius: 25, marginRight: 12 },
    productInfo: { flex: 1 },
    productName: { fontSize: 16, fontWeight: "bold" },
    productBio: { fontSize: 14, color: "#388e3c", marginTop: 2 },
    productStore: { fontSize: 13, color: "#888", marginTop: 2 },
    button: {
        backgroundColor: "#4CBB17",
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 25,
    },
    buttonText: { color: "#fff", fontWeight: "bold" },
});