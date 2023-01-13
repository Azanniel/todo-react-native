import { Text, View } from 'react-native';
import { Badge } from '../Badge';

import { styles } from './styles';

export function TasksCompleted() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Concluídas</Text>

      <Badge />
    </View>
  );
}