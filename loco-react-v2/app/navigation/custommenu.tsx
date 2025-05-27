// components/CustomMenu.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link, useRouter, usePathname } from 'expo-router';

export default function CustomMenu() {
  const pathname = usePathname(); // Chemin actuel, pour savoir où on est
  const router = useRouter();

  // Définis ici les liens du menu
  const menuItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Produits', href: '/consommateurs/homepage' },
    { label: 'Panier', href: '/consommateurs/homepage' },
    { label: 'Profil', href: '/consommateurs/homepage' },
  ];

  return (
    <View style={styles.container}>
      {menuItems.map(({ label, href }) => {
        // Savoir si c’est la page active
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href as any}
            style={[styles.link, isActive && styles.activeLink]}
          >
            <Text style={isActive ? styles.activeText : styles.text}>{label}</Text>
          </Link>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#eee',
    margin: 10,
    borderRadius: 50,

    // Pour coller en bas de l'écran (à ajuster si besoin)
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  link: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 50,
  },
  activeLink: {
    backgroundColor: '#4CBB17',
  },
  text: {
    color: '#333',
  },
  activeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
