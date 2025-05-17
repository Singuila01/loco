import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const PaiementPage: React.FC = () => {
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'applepay'>('card');
    const [saveInfo, setSaveInfo] = useState(false);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => console.log('Retour')}>
                    <Text style={styles.backButton}>Retour</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Paiement</Text>
            </View>

            {/* Billing Address */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Adresse de facturation</Text>
                <TextInput style={styles.input} placeholder="Adresse" />
                <TextInput style={styles.input} placeholder="Ville" />
                <TextInput style={styles.input} placeholder="Code postal" />
            </View>

            {/* Payment Method */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Moyen de paiement</Text>
                <View style={styles.paymentOptions}>
                    <TouchableOpacity onPress={() => setPaymentMethod('card')}>
                        <Text style={[styles.paymentOption, paymentMethod === 'card' && styles.selectedOption]}>
                            Carte Bleue
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setPaymentMethod('paypal')}>
                        <Text style={[styles.paymentOption, paymentMethod === 'paypal' && styles.selectedOption]}>
                            PayPal
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setPaymentMethod('applepay')}>
                        <Text style={[styles.paymentOption, paymentMethod === 'applepay' && styles.selectedOption]}>
                            ApplePay
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Payment Details */}
                {paymentMethod === 'card' && (
                    <View>
                        <TextInput style={styles.input} placeholder="Numéro de carte" keyboardType="numeric" />
                        <TextInput style={styles.input} placeholder="Date d'expiration (MM/AA)" keyboardType="numeric" />
                        <TextInput style={styles.input} placeholder="Code de sécurité" keyboardType="numeric" secureTextEntry />
                    </View>
                )}
                {paymentMethod === 'paypal' && <Text>Vous serez redirigé vers PayPal pour finaliser le paiement.</Text>}
                {paymentMethod === 'applepay' && <Text>ApplePay sera utilisé pour ce paiement.</Text>}
            </View>

            {/* Save Info */}
            <View style={styles.section}>
                <TouchableOpacity onPress={() => setSaveInfo(!saveInfo)}>
                    <Text style={styles.checkbox}>
                        {saveInfo ? '☑' : '☐'} Enregistrer les informations pour les prochains paiements
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Pay Button */}
            <View style={styles.section}>
                <Button title="Payer" onPress={() => console.log('Paiement effectué')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        color: '#007BFF',
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    paymentOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    paymentOption: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlign: 'center',
    },
    selectedOption: {
        backgroundColor: '#007BFF',
        color: '#fff',
    },
    checkbox: {
        fontSize: 16,
    },
});

export default PaiementPage;