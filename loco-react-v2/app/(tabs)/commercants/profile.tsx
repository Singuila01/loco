import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Mon profile</Text>
            </View>

            {/* Profile Section */}
            <View style={styles.profileSection}>
                <Image
                    source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
                    style={styles.avatar}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Jean Dupont</Text>
                    <TouchableOpacity style={styles.editButton}>
                        <Ionicons name="create-outline" size={16} color="#007AFF" />
                        <Text style={styles.editButtonText}>Modifier</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Description */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Description</Text>
                <Text style={styles.sectionText}>
                    Commerçant passionné par la qualité et le service client. Bienvenue sur mon profil !
                </Text>
            </View>

            {/* Horaire */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Horaires</Text>
                <Text style={styles.sectionText}>
                    Lundi - Vendredi : 9h - 18h{"\n"}
                    Samedi : 10h - 14h{"\n"}
                    Dimanche : Fermé
                </Text>
            </View>

            {/* Première zone */}
            <View style={styles.card}>
                <ProfileItem icon="person-outline" label="Information du compte" />
                <ProfileItem icon="heart-outline" label="Favoris" />
                <ProfileItem icon="star-outline" label="Fidélité" />
                <ProfileItem icon="time-outline" label="Historique" isLast />
            </View>

            {/* Deuxième zone */}
            <View style={styles.card}>
                <ProfileItem icon="help-circle-outline" label="Aide" />
                <ProfileItem icon="lock-closed-outline" label="Confidentialité" />
                <ProfileItem icon="document-text-outline" label="Mentions légales" />
                <ProfileItem icon="settings-outline" label="Gestion du compte" isLast />
            </View>
        </ScrollView>
    );
}

function ProfileItem({
    icon,
    label,
    isLast,
}: {
    icon: any;
    label: string;
    isLast?: boolean;
}) {
    return (
        <View style={[styles.profileItem, isLast && { borderBottomWidth: 0 }]}>
            <Ionicons name={icon} size={20} color="#555" style={{ marginRight: 16 }} />
            <Text style={styles.profileItemText}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
        paddingHorizontal: 20,
    },
    header: {
        paddingTop: 40,
        paddingBottom: 16,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#222",
        textAlign: "left",
    },
    profileSection: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 24,
    },
    avatar: {
        width: 72,
        height: 72,
        borderRadius: 36,
        marginRight: 16,
        backgroundColor: "#ddd",
    },
    profileInfo: {
        flex: 1,
        justifyContent: "center",
    },
    name: {
        fontSize: 20,
        fontWeight: "600",
        color: "#222",
        marginBottom: 6,
    },
    editButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#EAF4FF",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        alignSelf: "flex-start",
    },
    editButtonText: {
        color: "#007AFF",
        fontWeight: "500",
        marginLeft: 4,
    },
    section: {
        marginBottom: 18,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#444",
        marginBottom: 4,
    },
    sectionText: {
        fontSize: 15,
        color: "#666",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 18,
        paddingVertical: 4,
        marginBottom: 18,
        shadowColor: "#000",
        shadowOpacity: 0.04,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    profileItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        paddingHorizontal: 18,
        borderBottomWidth: 1,
        borderBottomColor: "#F0F0F0",
    },
    profileItemText: {
        fontSize: 16,
        color: "#333",
    },
});