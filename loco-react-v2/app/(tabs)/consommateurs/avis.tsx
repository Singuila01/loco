import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AvisProps {
    navigation: any;
    route: {
        params: {
            commercantName: string;
            avisCount: number;
        };
    };
}

const StarRating = ({
    rating,
    setRating,
}: {
    rating: number;
    setRating: (rating: number) => void;
}) => (
    <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
                <Ionicons
                    name={star <= rating ? 'star' : 'star-outline'}
                    size={32}
                    color="#FFD700"
                />
            </TouchableOpacity>
        ))}
    </View>
);

const Avis: React.FC<AvisProps> = ({ navigation, route }) => {
    const { commercantName = 'Nom du commerçant', avisCount = 0 } = route?.params || {};
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        // Logique de soumission ici
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Ajouter un avis</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.commercantName}>{commercantName}</Text>
                <Text style={styles.avisCount}>{avisCount} avis</Text>
            </View>

            <StarRating rating={rating} setRating={setRating} />

            <TextInput
                style={styles.textArea}
                placeholder="Votre avis..."
                value={comment}
                onChangeText={setComment}
                multiline
                numberOfLines={5}
                textAlignVertical="top"
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Soumettre</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    backButton: {
        marginRight: 12,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    infoContainer: {
        marginBottom: 20,
    },
    commercantName: {
        fontSize: 18,
        fontWeight: '600',
    },
    avisCount: {
        fontSize: 14,
        color: '#888',
        marginTop: 2,
    },
    starsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    textArea: {
        borderWidth: 1,
        borderColor: '#4CBB17',
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        minHeight: 100,
        marginBottom: 24,
        backgroundColor: '#fff',
    },
    submitButton: {
        backgroundColor: '#4CBB17',
        borderRadius: 30,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 8,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Avis;