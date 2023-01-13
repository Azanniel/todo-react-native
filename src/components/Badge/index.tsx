import { Text, View } from 'react-native';

import { styles } from './styles';

export function Badge() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>0</Text>
    </View>
  );
}