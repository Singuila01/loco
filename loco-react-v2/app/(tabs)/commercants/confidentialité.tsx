import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Confidentialité() {
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
                    <Text style={styles.sectionTitle}>1. Introduction</Text>
                    <Text style={styles.text}>La présente Politique de Confidentialité décrit les modalités de collecte, d'utilisation, de conservation et de protection des données personnelles des Utilisateurs de l'application Loco, accessible via PlayStore et AppleStore. En utilisant l'application, vous acceptez les pratiques décrites dans ce document.</Text>
                    <Text style={styles.sectionTitle}>2. Collecte des Données Personnelles</Text>
                    <Text style={styles.text}>Données Fournies par l'UtilisateurLors de la création d'un compte ou lors de l'utilisation de certaines fonctionnalités, nous pouvons collecter les informations suivantes : Nom, prénom, Adresse e-mail, Informations de localisation, Toute autre information que vous choisissez de communiquer via les formulaires ou les contacts intégrés à l'application, Données Collectées AutomatiquementLors de votre navigation dans l'application, nous collectons également certaines données techniques, notamment : Adresse IP, Type d'appareil et système d'exploitation, Identifiants de connexion et données de navigation (via des cookies ou autres technologies similaires), Données d'utilisation relatives aux fonctionnalités consultées</Text>
                    <Text style={styles.sectionTitle}>3. Utilisation des Données</Text>
                    <Text style={styles.text}>Les données collectées sont utilisées dans le but de : Assurer le bon fonctionnement de l'application. Permettre la création et la gestion de votre compte utilisateur. Personnaliser votre expérience et vous proposer des contenus ou services adaptés. Faciliter la mise en relation entre commerçants et consommateurs. Vous informer des mises à jour, offres promotionnelles et événements locaux. Analyser l'utilisation de l'application afin d'en améliorer les fonctionnalités et la sécurité</Text>
                    <Text style={styles.sectionTitle}>4. Sécurité et Conservation des Données</Text>
                    <Text style={styles.text}>Nous nous engageons à mettre en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, toute divulgation, modification ou destruction.Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, ou conformément aux exigences légales en vigueur.</Text>
                    <Text style={styles.sectionTitle}>5. Partage des Données</Text>
                    <Text style={styles.text}>Vos données personnelles ne sont partagées avec des tiers que dans les cas suivants :
                    Avec des prestataires techniques (hébergeurs, services d'analyse, etc.) sous réserve qu'ils respectent des obligations de confidentialité strictes
                    Pour répondre à une obligation légale ou à une demande des autorités compétentes
                    Avec votre consentement explicite, lorsque cela est nécessaire pour la fourniture de services complémentaires</Text>
                    <Text style={styles.sectionTitle}>6. Droits des Utilisateurs</Text>
                    <Text style={styles.text}>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants sur vos données personnelles :
                    Droit d'accès : obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie
                    Droit de rectification : demander la correction ou la mise à jour de vos informations
                    Droit à l'effacement : demander la suppression de vos données, dans la limite des obligations légales
                    Droit à la limitation du traitement : solliciter la restriction du traitement de vos données
                    Droit à la portabilité : recevoir vos données dans un format structuré et réutilisable
                    Droit d'opposition : vous opposer au traitement de vos données à des fins de marketing direct ou autres
                    Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : contact@loco.fr.</Text>
                    <Text style={styles.sectionTitle}>7. Cookies et Technologies Similaires</Text>
                    <Text style={styles.text}>L'application Loco utilise des cookies et autres technologies similaires pour :
                    Améliorer la navigation et l'expérience utilisateur
                    Collecter des statistiques d'utilisation
                    Proposer des contenus personnalisés
                    Vous pouvez configurer votre navigateur pour refuser l'utilisation des cookies, mais cela pourrait impacter certaines fonctionnalités de l'application.</Text>
                    <Text style={styles.sectionTitle}>8. Modifications de la Politique de Confidentialité</Text>
                    <Text style={styles.text}>Nous nous réservons le droit de modifier la présente Politique de Confidentialité à tout moment. Les modifications seront publiées sur l'application et, si nécessaire, notifiées aux Utilisateurs par e-mail ou via une notification dans l'application. Nous vous recommandons de consulter régulièrement cette page pour être informé des mises à jour.</Text>
                    <Text>9. Contact</Text>
                    <Text>Pour toute question ou demande relative à la présente Politique de Confidentialité, vous pouvez nous contacter à : Adresse postale : RennesE-mail : contact@loco.fr</Text>
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