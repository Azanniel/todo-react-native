import { StatusBar } from 'react-native';
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
        barStyle='default'
        backgroundColor='transparent'
        translucent
      />
    </>
  )
}