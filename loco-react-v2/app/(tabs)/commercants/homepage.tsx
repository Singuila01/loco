import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';

type Commande = {
    id: string;
    titre: string;
    date: string;
    montant: number;
    nom: string;
    prenom: string;
};

const commandes: Commande[] = [
    { id: '1', titre: 'Commande #1234', date: '2024-06-01', montant: 45.99, nom: 'Dupont', prenom: 'Jean' },
    { id: '2', titre: 'Commande #1235', date: '2024-06-02', montant: 29.50, nom: 'Dupont', prenom: 'Jean' },
    { id: '3', titre: 'Commande #1236', date: '2024-06-03', montant: 60.00, nom: 'Dupont', prenom: 'Jean' },
];

const totalCommandes28Jours = 42;
const totalVues = 1200;

const user = {
    nom: 'Dupont',
    prenom: 'Jean',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
};

export default function Homepage() {
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
                    data={commandes}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.commandeItem}>
                            <View>
                                <Text style={styles.commandeTitle}>{item.nom} {item.prenom}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <View>
                                    <Text style={styles.commandeSubtitle}>Montant</Text>
                                    <Text style={styles.commandeMontant}>{item.montant.toFixed(2)} €</Text>
                                </View>
                                <View>
                                    <Text style={styles.commandeSubtitle}>Numéro</Text>
                                    <Text style={styles.commandeMontant}>{item.id}</Text>
                                </View>
                                <View>
                                    <Text style={styles.commandeSubtitle}>Date</Text>
                                    <Text style={styles.commandeDate}>{item.date}</Text>
                                </View>
                            </View>
                            
                        </View>
                    )}
                    style={styles.commandesList}
                />

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
    commandesList: { marginBottom: 16 },
    commandeItem: { flexDirection: 'column', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#eee', padding: 20, borderRadius: 10, backgroundColor: '#fff', marginBottom: 8, width: '100%' },
    commandeTitle: { fontWeight: '700', fontSize: 28, color: '#333', paddingBottom: 8 },
    commandeDate: { color: '#888' },
    commandeMontant: { fontWeight: 'bold', color: '#2e7d32' },
    commandeSubtitle: { fontWeight: 500, fontSize: 18, color: '#555' },
    statsContainer: { flex: 2, marginTop: 8 },
    statBox: { flex: 1, backgroundColor: '#fff', padding: 16, borderRadius: 10, alignItems: 'center', marginHorizontal: 4 },
    statValue: { fontSize: 22, fontWeight: 'bold', color: '#1976d2' },
    statLabel: { fontSize: 14, color: '#555', marginTop: 4 },
});