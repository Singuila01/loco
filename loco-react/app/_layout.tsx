import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Stack, useRouter } from 'expo-router';

import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const router = useRouter();
  const hideMenus = ['/index', '/connexion', '/commercants', '/consommateurs'];

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // On masque le menu pour la page de connexion et d'inscription
          headerShown: !['/', 'connexion', 'inscription', 'commercants/index', 'consommateurs/index', 'commercants/verification_mail'].includes(route.name),
          tabBarStyle: ['/', 'connexion', 'inscription', 'commercants/index', 'consommateurs/index', 'commercants/verification_mail'].includes(route.name) ? { display: 'none' } : undefined,
        })}
      >
        <Tab.Screen name="connexion">
          {() => <Stack.Screen name="connexion" />}
        </Tab.Screen>
        <Tab.Screen name="inscription">
          {() => <Stack.Screen name="inscription" />}
        </Tab.Screen>
        <Tab.Screen name="/">
          {() => <Stack.Screen name="index" />}
        </Tab.Screen>
        <Tab.Screen name="commercants">
          {() => <Stack.Screen name="commercants/index" />}
        </Tab.Screen>
        <Tab.Screen name="consommateurs">
          {() => <Stack.Screen name="consommateurs/homepage" />}
        </Tab.Screen>
      </Tab.Navigator>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}