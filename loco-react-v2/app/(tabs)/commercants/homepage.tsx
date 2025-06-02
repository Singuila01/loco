import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';

type Commande = {
    id: string;
    nom_commande: string;
    description_commande: string;
    prix_total: string;
    etat_commande: string;
    id_utilisateur: string;
    id_produit: string;
    created_at: string;
};

const totalCommandes28Jours = 42;
const totalVues = 1200;
const APIurl = 'http://localhost:8000/api'

const user = {
    nom: 'Dupont',
    prenom: 'Jean',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
};

type Product = {
    id: string;
    nom_produit: string;
    description_produit: string;
};

function convertDate(ladate: any) {
    const date = new Date(ladate);
    const formattedDate = date.toLocaleDateString('fr-FR');
    console.log(formattedDate); // Affiche : 29/04/2025
    return date;
}

export default function Homepage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [commandes, setCommandes] = useState<Commande[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('http://localhost:8000/api/products')
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
    useEffect(() => {
        fetch('http://localhost:8000/api/consumer/commandes')
        .then(response => response.json())
        .then(data => {
            setCommandes(data);

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
                <View style={styles.row}>
                    <Text style={styles.sectionTitle}>Dernières commandes</Text>
                    <Link style={styles.buttonLink} href='/(tabs)/commercants/commande'>Tous voir</Link>
                </View>
                
                {commandes.length > 0 ? (
                    <View style={styles.commandeItem}>
                        <Text style={styles.commandeTitle}>Nom: {commandes[0].nom_commande}</Text>
                        <View style={styles.commandeInfo}>
                            <View>
                                <Text>Montant</Text>
                                <Text>{commandes[0].prix_total}</Text>
                            </View>
                            <View>
                                <Text>Commande</Text>
                                <Text>{commandes[0].id}</Text>
                            </View>
                            <View>
                                <Text>Date</Text>
                                <Text>{convertDate(commandes[0].created_at).toLocaleDateString('fr-FR')}</Text>
                            </View>
                        </View>
                    </View>
                ) : (
                    <Text>Aucune commande trouvée.</Text>
                )}

                {/* Statistiques */}
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
    commandeInfo: { flexDirection: 'row', gap: 10, borderWidth: 1, borderColor: '#ff0000', borderRadius: 20, padding: 5},
    commandesList: { marginBottom: 16 },
    commandeItem: { flexDirection: 'column', borderBottomWidth: 1, borderBottomColor: '#eee', padding: 20, borderRadius: 10, backgroundColor: '#fff', marginBottom: 8, width: '100%', gap: 8, flexWrap: 'wrap' },
    commandeTitle: { fontWeight: '700', fontSize: 21, color: '#333', paddingBottom: 8 },
    commandeDate: { color: '#888' },
    row: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 20 },
    commandeMontant: { fontWeight: 'bold', color: '#2e7d32' },
    commandeSubtitle: { fontWeight: 500, fontSize: 18, color: '#555' },
    statsContainer: { flex: 2, marginTop: 8, gap: 8, flexDirection: 'column', justifyContent: 'space-between', flexWrap: 'nowrap' },
    statBox: { flex: 1, backgroundColor: '#fff', padding: 16, borderRadius: 10, alignItems: 'center', marginHorizontal: 4 },
    statValue: { fontSize: 22, fontWeight: 'bold', color: '#1976d2' },
    statLabel: { fontSize: 14, color: '#555', marginTop: 4 },
    buttonLink: { color: '#aaa' },
});