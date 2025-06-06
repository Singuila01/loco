import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const DAYS = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
];

type Hours = {
    open: string;
    close: string;
    openDay: boolean;
};

const defaultHours: Hours = {
    open: '',
    close: '',
    openDay: false,
};

const Entreprise: React.FC = () => {
    const [name, setName] = useState('');
    const [hours, setHours] = useState<Hours[]>(
        DAYS.map(() => ({ ...defaultHours }))
    );

    const handleHourChange = (index: number, field: keyof Hours, value: string | boolean) => {
        const updated = [...hours];
        updated[index] = {
            ...updated[index],
            [field]: value,
        };
        setHours(updated);
    };

    const handleSubmit = () => {
        // Traitement du formulaire ici
        // Par exemple, envoyer les données à une API
        console.log({ name, hours });
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.formContainer}>
                <Text style={styles.title}>Informations sur l'entreprise</Text>
                <Text style={styles.label}>Nom du commerce</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Entrez le nom du commerce"
                    value={name}
                    onChangeText={setName}
                />
                <Text style={styles.label}>Jours et horaires d'ouverture</Text>
                {DAYS.map((day, idx) => (
                    <View key={day} style={styles.dayRow}>
                        <TouchableOpacity
                            style={[
                                styles.checkbox,
                                hours[idx].openDay && styles.checkboxChecked,
                            ]}
                            onPress={() =>
                                handleHourChange(idx, 'openDay', !hours[idx].openDay)
                            }
                        >
                            {hours[idx].openDay && <View style={styles.checkboxInner} />}
                        </TouchableOpacity>
                        <Text style={styles.dayLabel}>{day}</Text>
                        <TextInput
                            style={[
                                styles.hourInput,
                                !hours[idx].openDay && styles.hourInputDisabled,
                            ]}
                            placeholder="Ouverture"
                            value={hours[idx].open}
                            onChangeText={text => handleHourChange(idx, 'open', text)}
                            editable={hours[idx].openDay}
                            keyboardType="numeric"
                        />
                        <Text style={styles.hourSeparator}>-</Text>
                        <TextInput
                            style={[
                                styles.hourInput,
                                !hours[idx].openDay && styles.hourInputDisabled,
                            ]}
                            placeholder="Fermeture"
                            value={hours[idx].close}
                            onChangeText={text => handleHourChange(idx, 'close', text)}
                            editable={hours[idx].openDay}
                            keyboardType="numeric"
                        />
                    </View>
                ))}
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    {/* <Text style={styles.submitButtonText}>Enregistrer</Text> */}
                    <Link href="/(tabs)/commercants/homepage" style={styles.submitButtonText}>Page d'accueil</Link>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Entreprise;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4CBB17', // Vert
        justifyContent: 'center',
        alignItems: 'center',
        height: 5,
        width: "auto"
    },
    formContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 18,
        color: '#222',
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        marginTop: 12,
        marginBottom: 6,
        color: '#222',
    },
    input: {
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
        backgroundColor: '#f9f9f9',
    },
    dayRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    checkbox: {
        width: 22,
        height: 22,
        borderWidth: 1,
        borderColor: '#2ecc40',
        borderRadius: 4,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    checkboxChecked: {
        backgroundColor: '#2ecc40',
        borderColor: '#27ae60',
    },
    checkboxInner: {
        width: 12,
        height: 12,
        backgroundColor: '#fff',
        borderRadius: 2,
    },
    dayLabel: {
        width: 80,
        fontSize: 15,
        color: '#222',
    },
    hourInput: {
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 6,
        padding: 6,
        width: 70,
        marginHorizontal: 4,
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
    },
    hourInputDisabled: {
        backgroundColor: '#eee',
        color: '#aaa',
    },
    hourSeparator: {
        fontSize: 18,
        color: '#222',
    },
    submitButton: {
        backgroundColor: '#2ecc40',
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 22,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
    },
});