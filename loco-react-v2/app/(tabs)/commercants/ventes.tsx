import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { ActivityIndicator, Alert } from 'react-native';


type Sale = {
  id: string;
  name: string;
  email: string;
  date: string;
  amount: string;
  order: string;
  status: 'Tous' | 'En cours' | 'Terminer';
  image: string;
};

export default function VentesScreen() {
    const [selectedFilter, setSelectedFilter] = useState<'Tous' | 'En cours' | 'Terminer'>('Tous');

    const [salesData, setSalesData] = useState<Sale[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchSales = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/consumer/commandes');
            const json = await response.json();
            setSalesData(json);
        } catch (error) {
            Alert.alert("Erreur", "Impossible de charger les ventes.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    fetchSales();
    }, []);

  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <Text className="text-2xl font-bold text-center my-4">Ventes</Text>

      {/* Filters */}
      <View className="flex-row justify-around mb-4">
        {['Tous', 'En cours', 'Terminer'].map(status => (
          <TouchableOpacity
            key={status}
            onPress={() => setSelectedFilter(status as any)}
            className={`px-4 py-2 rounded-full ${selectedFilter === status ? 'bg-green-500' : 'bg-transparent'}`}
          >
            <Text className={`${selectedFilter === status ? 'text-white' : 'text-black'}`}>{status}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Sales list */}
      <FlatList
        data={salesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-white p-4 mb-4 rounded-xl shadow-sm">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <Image
                  source={{ uri: item.image }}
                  className="w-10 h-10 rounded-full"
                />
                <View>
                  <Text className="font-semibold">{item.name}</Text>
                  <Text className="text-gray-500">{item.email}</Text>
                </View>
              </View>
              <Ionicons name="arrow-forward-outline" size={20} />
            </View>

            <View
              className="mt-4 p-3 rounded-xl"
              style={{ borderWidth: 1 }}
            >
              <View className="flex-row justify-between">
                <View>
                  <Text className="text-xs text-gray-500">Montant</Text>
                  <Text className="font-bold">{item.amount}</Text>
                </View>
                <View>
                  <Text className="text-xs text-gray-500">Commande</Text>
                  <Text className="font-bold">{item.order}</Text>
                </View>
                <View>
                  <Text className="text-xs text-gray-500">Date</Text>
                  <Text className="font-bold">{item.date}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 bg-white py-3 border-t flex-row justify-around">
        <TouchableOpacity><Ionicons name="home-outline" size={24} /></TouchableOpacity>
        <TouchableOpacity className="bg-green-500 p-3 rounded-full -mt-6">
          <Ionicons name="cart-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity><Ionicons name="person-outline" size={24} /></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
