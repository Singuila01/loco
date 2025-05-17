import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';

export const screenOptions = {
    headerShown: false, // Désactive l'en-tête
};

export default function TabLayout() {
    return (
        <Tabs screenOptions={({ route }) => ({
            tabBarStyle: ['index', 'commercants/conne', 'consommateurs/verification_mail', 'consommateurs/connexion', 'commercants/inscription', 'consommateurs/inscription'].includes(route.name) ? { display: 'none' } : undefined,
            headerShown: !['index', 'commercants/index', 'consommateurs/verification_mail', 'consommateurs/connexion', 'commercants/inscription', 'consommateurs/inscription', 'consommateurs/homepage'].includes(route.name),
        })}>
            <Tabs.Screen
                name='/index'
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    test: {
        fontWeight: 900,
    }
});