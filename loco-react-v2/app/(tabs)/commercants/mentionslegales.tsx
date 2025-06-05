import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MentionsLegales() {
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
                    <Text style={styles.title}>Mentions légales</Text>
                </View>
                <View>
                        <Text style={styles.sectionTitle}>1. Éditeur de l’application</Text>
                        <Text style={styles.text}>L'application Loco est éditée par L’entreprise LOCO, ayant son siège social à Rennes, immatriculée sous le numéro 701 421 212 00018, adresse e-mail : contact@loco.fr.</Text>
                        <Text style={styles.sectionTitle}>2. Hébergement</Text>
                        <Text style={styles.text}>L’application est hébergée par CONTABO FRANCE ayant son siège social à 2 RUE TAUNUS, 67630 LAUTERBOURG, contact : contact@contabo.fr.</Text>
                        <Text style={styles.sectionTitle}>3. Objet de l’application</Text>
                        <Text style={styles.text}>Loco est une application mobile visant à mettre en relation les commerçants locaux et les consommateurs afin de dynamiser le commerce local à Rennes.</Text>
                        <Text style={styles.sectionTitle}>4. Propriété intellectuelle</Text>
                        <Text style={styles.text}>L’ensemble des contenus présents sur l’application (textes, images, logos, icônes, design, etc.) est la propriété exclusive de Loco ou de ses partenaires et est protégé par les lois en vigueur sur la propriété intellectuelle. Toute reproduction, distribution ou exploitation non autorisée est strictement interdite.</Text>
                        <Text style={styles.sectionTitle}>5. Données personnelles</Text>
                        <Text style={styles.text}>Loco s’engage à respecter la réglementation en vigueur relative à la protection des données personnelles (RGPD). Les données collectées sont utilisées uniquement dans le cadre du bon fonctionnement de l’application. Les utilisateurs disposent d’un droit d’accès, de rectification et de suppression de leurs données en contactant support@loco.fr.</Text>
                        <Text style={styles.sectionTitle}>6. Responsabilité</Text>
                        <Text style={styles.text}>Loco met en œuvre tous les moyens nécessaires pour assurer le bon fonctionnement de l’application mais ne peut être tenu responsable des interruptions, erreurs ou dommages résultant de l’utilisation de l’application. Les commerçants sont seuls responsables des informations qu’ils publient et des transactions réalisées avec les consommateurs via l’application.</Text>
                        <Text style={styles.sectionTitle}>7. Conditions d’utilisation</Text>
                        <Text style={styles.text}>L’utilisation de l’application implique l’acceptation pleine et entière des présentes mentions légales ainsi que des conditions générales d’utilisation (CGU) disponibles ici.</Text>
                        <Text style={styles.sectionTitle}>8. Droit applicable</Text>
                        <Text style={styles.text}>Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux compétents seront ceux du ressort du siège social de Loco.</Text>
                    </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10, marginBottom: 80 },
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
    content: { padding: 24 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 24, marginBottom: 8 },
    text: { fontSize: 16, lineHeight: 24 },
});