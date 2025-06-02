import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link, usePathname } from 'expo-router';

export default function CustomMenu() {
    const pathname = usePathname();

    if (pathname === '/' || pathname === '/commercants/inscription' || pathname === '/commercants/connexion' || pathname === '/consommateurs/inscription' || pathname === '/consommateurs/connexion') {
        return null;
    }

    const isCommercant = pathname.startsWith('/commercants');
    const isConsommateur = pathname.startsWith('/consommateurs');

    const consommateurMenu = [
        { label: 'Accueil', href: '/consommateurs/homepage' },
        { label: 'Produits', href: '/consommateurs/produits' },
        { label: 'Panier', href: '/consommateurs/panier' },
        { label: 'Profil', href: '/consommateurs/profile' },
    ];

    const commercantMenu = [
        { label: 'Accueil', href: '/commercants/homepage' },
        { label: 'Mes produits', href: '/commercants/produits' },
        { label: 'Commandes', href: '/commercants/commandes' },
        { label: 'Profil', href: '/commercants/profile' },
    ];

    const menuItems = isCommercant ? commercantMenu : consommateurMenu;

    return (
        <View style={styles.container}>
        {menuItems.map(({ label, href }) => {
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
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#eee',
    margin: 'auto',
    marginBottom: 20,
    borderRadius: 50,
    width: '100%',
    maxWidth: 500,
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