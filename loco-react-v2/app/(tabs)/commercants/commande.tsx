import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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

function convertDate(ladate: any) {
    const date = new Date(ladate);
    const formattedDate = date.toLocaleDateString('fr-FR');
    console.log(formattedDate); // Affiche : 29/04/2025
    return date;
}

const CommandesPage: React.FC = () => {
    const [commandes, setCommandes] = useState<Commande[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            fetch('http://127.0.0.1:8000/api/consumer/commandes')
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

    if (loading) return <div>Chargement...</div>;

    return (
        <ScrollView>
            <Text>Commandes</Text>
            {commandes.map(commande => (
                <TouchableOpacity
                    key={commande.id}
                    style={styles.commandeItem}
                >
                    {/* <Image source={{ uri: cat.image }} style={styles.categoryImage} /> */}
                    <Text>{commande.nom_commande}</Text>
                    <View style={styles.commandeInfo}>
                        <Text>Montant</Text>
                        <Text>{commande.prix_total}</Text>
                    </View>
                    <View>
                        <Text>Commande</Text>
                        <Text>#{commande.id}</Text>
                    </View>
                    <View>
                        <Text>Date</Text>
                        <Text>{convertDate(commande.created_at).toLocaleDateString('fr-FR')}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default CommandesPage;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, paddingTop: 50, paddingBottom: 120, backgroundColor: '#f5f5f5' },
    profileContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
    profileImage: { width: 60, height: 60, borderRadius: 30, marginRight: 16 },
    profileName: { fontSize: 20, fontWeight: 'bold' },
    sectionTitle: { fontSize: 18, fontWeight: '600', marginVertical: 12 },
    commandeInfo: { flexDirection: 'row', gap: 20, borderColor: '#fefefe', borderWidth: 5},
    commandesList: { marginBottom: 16 },
    commandeItem: { flexDirection: 'column', borderBottomWidth: 1, borderBottomColor: '#eee', padding: 20, borderRadius: 10, backgroundColor: '#fff', marginBottom: 8, width: '100%', gap: 8, flexWrap: 'wrap' },
    commandeTitle: { fontWeight: '700', fontSize: 28, color: '#333', paddingBottom: 8 },
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