import { Text, View } from 'react-native';

import { Badge } from '../Badge';

import { styles } from './styles';

export function TasksCreated() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criadas</Text>
      
      <Badge />
    </View>
  );
}