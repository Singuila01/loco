import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// import React from 'react';
// import { View, StyleSheet, ImageBackground } from 'react-native';

// export default function Carte(){
//     interface MarkerData {
//         latitude: number;
//         longitude: number;
//         title: string;
//         description: string;
//     }

//     const [markers, setMarkers] = useState<MarkerData[]>([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Remplacez cette URL par l'URL de votre API
//         const fetchMarkers = async () => {
//             try {
//                 const response = await fetch('https://api.example.com/markers');
//                 const data = await response.json();
//                 setMarkers(data);
//             } catch (error) {
//                 console.error('Erreur lors de la récupération des marqueurs:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchMarkers();
//     }, []);

//     if (loading) {
//         return (
//             <View style={styles.loaderContainer}>
//                 <ActivityIndicator size="large" color="#0000ff" />
//             </View>
//         );
//     }

//     return (
//         <MapView
//             style={styles.map}
//             initialRegion={{
//                 latitude: 48.8566, // Coordonnées par défaut (Paris)
//                 longitude: 2.3522,
//                 latitudeDelta: 0.0922,
//                 longitudeDelta: 0.0421,
//             }}
//         >
//             {markers.map((marker, index) => (
//                 <Marker
//                     key={index}
//                     coordinate={{
//                         latitude: marker.latitude,
//                         longitude: marker.longitude,
//                     }}
//                     title={marker.title}
//                     description={marker.description}
//                 />
//             ))}
//         </MapView>
//     );
// };

export default function CarteAvecImageDeFond() {
    return (
        <ImageBackground
            source={{ uri: 'https://example.com/background-image.jpg' }} // Remplacez par l'URL de votre image
            style={styles.background}
        >
            <View style={styles.overlay}>
                {/* 

                export default function Carte(){
                    interface MarkerData {
                        latitude: number;
                        longitude: number;
                        title: string;
                        description: string;
                    }

                    const [markers, setMarkers] = useState<MarkerData[]>([]);
                    const [loading, setLoading] = useState(true);

                    useEffect(() => {
                        // Remplacez cette URL par l'URL de votre API
                        const fetchMarkers = async () => {
                            try {
                                const response = await fetch('https://api.example.com/markers');
                                const data = await response.json();
                                setMarkers(data);
                            } catch (error) {
                                console.error('Erreur lors de la récupération des marqueurs:', error);
                            } finally {
                                setLoading(false);
                            }
                        };

                        fetchMarkers();
                    }, []);

                    if (loading) {
                        return (
                            <View style={styles.loaderContainer}>
                                <ActivityIndicator size="large" color="#0000ff" />
                            </View>
                        );
                    }

                    return (
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: 48.8566, // Coordonnées par défaut (Paris)
                                longitude: 2.3522,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            {markers.map((marker, index) => (
                                <Marker
                                    key={index}
                                    coordinate={{
                                        latitude: marker.latitude,
                                        longitude: marker.longitude,
                                    }}
                                    title={marker.title}
                                    description={marker.description}
                                />
                            ))}
                        </MapView>
                    );
                };

                const styles = StyleSheet.create({
                    map: {
                        flex: 1,
                    },
                    loaderContainer: {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                });

                // export default Carte;
                */}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optionnel : ajoute une superposition semi-transparente
    },
});

// export default Carte;