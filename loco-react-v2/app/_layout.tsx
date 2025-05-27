// app/_layout.tsx
import { Stack, usePathname } from 'expo-router';
import CustomMenu from './navigation/custommenu';

export default function Layout() {
  const pathname = usePathname();

  const showMenu = !['/login', '/onboarding'].includes(pathname);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {/* TODO: Replace 'navigation={navigation}' with the actual navigation prop from your navigation context */}
      {showMenu && <CustomMenu />}
    </>
  );
}