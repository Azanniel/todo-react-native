import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold
} from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Home />

      <StatusBar
        style='dark'
        translucent
        backgroundColor='transparent'
      />
    </>
  )
}
