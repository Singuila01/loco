import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';

type Commande = {
    id: string;
    titre: string;
    date: string;
    montant: number;
    nom: string;
    prenom: string;
};

const totalCommandes28Jours = 42;
const totalVues = 1200;

const user = {
    nom: 'Dupont',
    prenom: 'Jean',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
};

type Product = {
    id: string;
    nom_produit: string;
    description_produit: string;
    // Ajoutez d'autres propriétés si nécessaire
};

export default function Homepage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data); // Accès direct à `results`

            console.log(data);
            
            setLoading(false);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
            setLoading(false);
        });
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Profil */}
                <View style={styles.profileContainer}>
                    <Image source={{ uri: user.image }} style={styles.profileImage} />
                    <View>
                        <Text style={styles.profileName}>{user.prenom} {user.nom}</Text>
                    </View>
                </View>

                {/* Commandes */}
                <Text style={styles.sectionTitle}>Dernières commandes</Text>
                
                <FlatList
                    data={products}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.commandeItem}>
                            <Text>{item.nom_produit}</Text>
                            <Text>{item.description_produit}</Text>
                        </View>
                    )}
                />
                {/* <FlatList
                    data={products}
                    keyExtractor={item => item.id}
                    renderItem={(item) => (
                        <View style={styles.commandeItem}>
                            <View key={index}>
                                <Text style={styles.commandeTitle}>{product.nom_produit}</Text>
                                <Text style={styles.commandeSubtitle}>{product.description_produit}</Text>
                            </View>                            
                        </View>
                    )}
                    style={styles.commandesList}
                /> */}

                {/* Statistiques */}
                <Link href="/commercants/connexion">FormSreen</Link>
                <Text style={styles.sectionTitle}>Statistiques</Text>
                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>{totalCommandes28Jours}</Text>
                        <Text style={styles.statLabel}>Commandes (28j)</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>{totalVues}</Text>
                        <Text style={styles.statLabel}>Vues totales</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>{totalVues}</Text>
                        <Text style={styles.statLabel}>Vues totales</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>{totalVues}</Text>
                        <Text style={styles.statLabel}>Vues totales</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>{totalVues}</Text>
                        <Text style={styles.statLabel}>Vues totales</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>{totalVues}</Text>
                        <Text style={styles.statLabel}>Vues totales</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, paddingTop: 50, paddingBottom: 120, backgroundColor: '#f5f5f5' },
    profileContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
    profileImage: { width: 60, height: 60, borderRadius: 30, marginRight: 16 },
    profileName: { fontSize: 20, fontWeight: 'bold' },
    sectionTitle: { fontSize: 18, fontWeight: '600', marginVertical: 12 },
    commandesList: { marginBottom: 16 },
    commandeItem: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#eee', padding: 20, borderRadius: 10, backgroundColor: '#fff', marginBottom: 8, width: '100%', gap: 8, flexWrap: 'wrap' },
    commandeTitle: { fontWeight: '700', fontSize: 28, color: '#333', paddingBottom: 8 },
    commandeDate: { color: '#888' },
    commandeMontant: { fontWeight: 'bold', color: '#2e7d32' },
    commandeSubtitle: { fontWeight: 500, fontSize: 18, color: '#555' },
    statsContainer: { flex: 2, marginTop: 8, gap: 8, flexDirection: 'column', justifyContent: 'space-between', flexWrap: 'nowrap' },
    statBox: { flex: 1, backgroundColor: '#fff', padding: 16, borderRadius: 10, alignItems: 'center', marginHorizontal: 4 },
    statValue: { fontSize: 22, fontWeight: 'bold', color: '#1976d2' },
    statLabel: { fontSize: 14, color: '#555', marginTop: 4 },
});