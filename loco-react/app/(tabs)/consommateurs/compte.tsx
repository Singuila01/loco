import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function CompteScreen(){
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <Text style={styles.header}>Mon profil</Text>

            {/* Profile Section */}
            <View style={styles.profileSection}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/100' }}
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>Nom de la personne</Text>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Modifier</Text>
                </TouchableOpacity>
            </View>

            {/* Links Section */}
            <View style={styles.linksSection}>
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkText}>Informations du compte</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkText}>Favoris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkText}>Fidélité</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkText}>Historique</Text>
                </TouchableOpacity>
            </View>

            {/* Secondary Links Section */}
            <View style={styles.linksSection}>
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkText}>Aide</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkText}>Confidentialité</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkText}>Mentions Légales</Text>
                </TouchableOpacity>
            </View>

            {/* Account Actions Section */}
            <View style={styles.accountActionsSection}>
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkText}>Passez en compte commerçant</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link}>
                    <Text style={[styles.linkText, styles.dangerText]}>Se déconnecter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link}>
                    <Text style={[styles.linkText, styles.dangerText]}>Supprimer mon compte</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 24,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 8,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    editButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    linksSection: {
        marginBottom: 24,
    },
    link: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    linkText: {
        fontSize: 16,
    },
    accountActionsSection: {
        marginBottom: 24,
    },
    dangerText: {
        color: 'red',
    },
});

// export default CompteScreen;