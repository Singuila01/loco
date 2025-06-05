import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Aide() {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                        accessibilityLabel="Retour"
                    >
                        <Text style={styles.backText}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Aide</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>Quels sont les avantages d'être présents sur LOCO ?</Text>
                    <Text style={styles.text}>Comment ajouter mon commerce et mes produits  ?</Text>
                    <Text style={styles.text}>Puis-je gérer mes horaires d'ouverture dans l'application</Text>
                    <Text style={styles.text}>Comment recevoir les messages ou demandes des utilisateurs ?</Text>
                    <Text style={styles.text}>Comment accéder aux statistiques de mon commernce ?</Text>
                    <Text style={styles.text}>Qui contacter en cas de problème technique ?</Text>
                    <Text style={styles.text}>Puis-je proposer des offres spéciales ou des événements ?</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10, marginBottom: 80, height: "auto" },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    backButton: { width: 32, alignItems: 'flex-start' },
    backText: { fontSize: 24 },
    title: { flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 'bold' },
    rightSpacer: { width: 32 },
    content: { flex: 1, padding: 24, gap: 20 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 24, marginBottom: 8 },
    text: { fontSize: 16, lineHeight: 24, fontWeight: "400" },
});