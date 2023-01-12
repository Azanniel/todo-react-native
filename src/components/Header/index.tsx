import { View, Image } from 'react-native';

import logo from '../../assets/logo.png';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />
    </View>
  );
}