import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Commercant = {
    id: string;
    nom_entreprise: string;
    email: string;
    adresse: string;
    phone: string;
    id_ville: string;
};

function formatDistance(distance: number) {
    if (distance < 1000) return `${distance} m`;
    return `${distance.toFixed(1)} km`;
}

// function Etoiles({ count }: { count: number }) {
//     return (
//         <span>
//             {Array.from({ length: 5 }).map((_, i) => (
//                 <span key={i} style={{ color: i < count ? "#FFD700" : "#E0E0E0" }}>★</span>
//             ))}
//         </span>
//     );
// }

export default function Commercants() {
    const [search, setSearch] = useState("");
    const [commercants, setCommercant] = useState<Commercant[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/api/consumer/commercants')
        .then(response => response.json())
        .then(data => {
            setCommercant(data);

            console.log(data);
            
            setLoading(false);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
            setLoading(false);
        });
    }, []);

    return (
        <ScrollView>
            <TextInput style={styles.textinput} placeholder='Rechercher' />
            {commercants.map(commercant => (
                <TouchableOpacity key={commercant.id} style={styles.container}>
                    {/* <Image source={{ uri: cat.image }} style={styles.categoryImage} /> */}
                    <View style={styles.commerce}>
                        <View>
                            <Text>{commercant.nom_entreprise}</Text>
                            <View>
                                <Text style={styles.textgrey}>{commercant.nom_entreprise}</Text>
                                <Text>{commercant.nom_entreprise}</Text>
                            </View>
                            <View>
                                <Text>{commercant.nom_entreprise}</Text> {/* Catégorie du commercant */}
                                <Text>{commercant.nom_entreprise}</Text> {/* Bouton vers le commercant */}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#f3f3f3',
        padding: 10
    },
    commerce: {
        backgroundColor: '#fff',
        borderRadius: 30,
        margin: 5,
        padding: 20
    },

    textinput: {
        backgroundColor: '#fff',
        color: '#c0c0c0',
        borderRadius: 30,
        margin: 15,
        padding: 15,
    },
    textgrey: {
        color: '#c0c0c0'
    }
});


// <div
        //     style={{
        //         minHeight: "100vh",
        //         background: "#f3f3f3",
        //         padding: "24px 12px",
        //     }}
        // >
        //     <div
        //         style={{
        //             background: "#fff",
        //             borderRadius: 30,
        //             padding: "12px 20px",
        //             marginBottom: 24,
        //             boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
        //         }}
        //     >
        //         <input
        //             type="text"
        //             placeholder="Rechercher un commerçant..."
        //             value={search}
        //             onChange={(e) => setSearch(e.target.value)}
        //             style={{
        //                 border: "none",
        //                 outline: "none",
        //                 width: "100%",
        //                 fontSize: 16,
        //                 background: "transparent",
        //             }}
        //         />
        //     </div>
        //     <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                

        //         {filtered.map((c) => (
        //             <div
        //                 key={c.id}
        //                 style={{
        //                     background: "#fff",
        //                     borderRadius: 20,
        //                     padding: "18px 20px 16px 20px",
        //                     position: "relative",
        //                     boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
        //                     display: "flex",
        //                     flexDirection: "column",
        //                     gap: 8,
        //                 }}
        //             >
        //                 <div style={{ fontWeight: 600, fontSize: 18 }}>{c.nom}</div>
        //                 <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#888", fontSize: 15 }}>
        //                     <span>{formatDistance(c.distance)}</span>
        //                     <Etoiles count={c.etoiles} />
        //                 </div>
        //                 <div style={{ color: "#4CBB17", fontWeight: 500, fontSize: 15 }}>{c.categorie}</div>
        //                 <button
        //                     style={{
        //                         position: "absolute",
        //                         bottom: 16,
        //                         right: 20,
        //                         background: "#4CBB17",
        //                         color: "#fff",
        //                         border: "none",
        //                         borderRadius: 16,
        //                         padding: "8px 18px",
        //                         fontWeight: 600,
        //                         cursor: "pointer",
        //                         fontSize: 15,
        //                         boxShadow: "0 1px 4px rgba(76,187,23,0.08)",
        //                     }}
        //                     onClick={() => {
        //                         // Remplacer par la navigation réelle
        //                         alert(`Accéder à la page de ${c.nom}`);
        //                     }}
        //                 >
        //                     Voir
        //                 </button>
        //             </div>
        //         ))}
        //         {filtered.length === 0 && (
        //             <div style={{ color: "#888", textAlign: "center", marginTop: 40 }}>
        //                 Aucun commerçant trouvé.
        //             </div>
        //         )}
        //     </div>
        // </div>