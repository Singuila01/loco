import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <Text style={styles.header}>Mon profile</Text>

            {/* Profile Section */}
            <View style={styles.profileSection}>
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                    style={styles.avatar}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Jean Dupont</Text>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editButtonText}>Modifier</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* First Card */}
            <View style={styles.card}>
                <ProfileItem label="Information du compte" />
                <ProfileItem label="Favoris" />
                <ProfileItem label="Fidélité" />
                <ProfileItem label="Historique" isLast />
            </View>

            {/* Second Card */}
            <View style={styles.card}>
                <ProfileItem label="Aide" />
                <ProfileItem label="Confidentialité" />
                <ProfileItem label="Mentions légales" />
                <ProfileItem label="Gestion du compte" isLast />
            </View>
        </ScrollView>
    );
}

function ProfileItem({ label, isLast }: { label: string; isLast?: boolean }) {
    return (
        <View style={[styles.item, isLast && { borderBottomWidth: 0 }]}>
            <Text style={styles.itemText}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#222',
        textAlign: 'left',
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
    },
    avatar: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: '#ccc',
    },
    profileInfo: {
        marginLeft: 18,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        color: '#222',
    },
    editButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 18,
        marginLeft: 12,
    },
    editButtonText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 15,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 18,
        paddingVertical: 8,
        marginBottom: 22,
        // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        // Android shadow
        elevation: 2,
    },
    item: {
        paddingVertical: 18,
        paddingHorizontal: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    itemText: {
        fontSize: 16,
        color: '#333',
    },
});