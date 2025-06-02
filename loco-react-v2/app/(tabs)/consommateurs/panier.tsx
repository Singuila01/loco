import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const API_URL = 'http://localhost:8000/api';

type Product = {
    id: string;
    name: string;
    price: number;
    quantity: number;
};

type Commande = {
    id: string;
    nom_commande: string;
    description_commande: string;
    prix_total: string;
    quantite: string;
    etat_commande: string;
}

const mockCart: Product[] = [
    { id: '1', name: 'Produit 1', price: 12.99, quantity: 2 },
    { id: '2', name: 'Produit 2', price: 8.5, quantity: 1 },
    { id: '3', name: 'Produit 3', price: 5.0, quantity: 3 },
];

export default function PanierScreen({ navigation }: any) {
    const cart = mockCart;

    const [commandes, setCommande] = useState<Commande[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${API_URL}/consumer/commandes`);
                if (!response.ok) throw new Error('Erreur lors du chargement');
                const data = await response.json();
                setCommande(data);
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

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#222" />
                </TouchableOpacity>
                <Text style={styles.title}>Mon Panier</Text>
            </View>

            {/* Product List */}
            <View>
                {commandes.map((commande, index) => (
                    <View>
                        <View>
                            <Text>{commande.nom_commande}</Text>
                            <Text>{commande.description_commande}</Text>
                        </View>
                        <View>
                            <View>
                                <Text>{commande.prix_total}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#EEE',
                                        borderRadius: 4,
                                        padding: 6,
                                        marginHorizontal: 4,
                                    }}
                                    onPress={() => {
                                        setCommande(prevCommandes =>
                                            prevCommandes.map((cmd, i) =>
                                                i === index
                                                    ? { ...cmd, quantite: (parseInt(cmd.quantite, 10) - 1).toString() }
                                                    : cmd
                                            )
                                        );
                                    }}
                                >
                                    <Ionicons name="remove" size={20} color="#222" />
                                </TouchableOpacity>
                                <Text style={{ minWidth: 24, textAlign: 'center', fontSize: 16 }}>
                                    {commande.quantite}
                                </Text>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#EEE',
                                        borderRadius: 4,
                                        padding: 6,
                                        marginHorizontal: 4,
                                    }}
                                    onPress={() => {
                                        setCommande(prevCommandes =>
                                            prevCommandes.map((cmd, i) =>
                                                i === index
                                                    ? { ...cmd, quantite: (parseInt(cmd.quantite, 10) + 1).toString() }
                                                    : cmd
                                            )
                                        );
                                    }}
                                >
                                    <Ionicons name="add" size={20} color="#222" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.totalText}>Total: {total.toFixed(2)} €</Text>
                <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.orderButtonText}>Commander</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F2F2F2',
    },
    backButton: {
        marginRight: 12,
        padding: 4,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#222',
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    productItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        justifyContent: 'space-between',
    },
    productName: {
        flex: 2,
        fontSize: 16,
        color: '#222',
    },
    productDetails: {
        flex: 1,
        fontSize: 14,
        color: '#666',
        textAlign: 'right',
    },
    productTotal: {
        flex: 1,
        fontSize: 16,
        color: '#222',
        fontWeight: 'bold',
        textAlign: 'right',
        marginLeft: 8,
    },
    footer: {
        backgroundColor: '#FFF',
        padding: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
    orderButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    orderButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});