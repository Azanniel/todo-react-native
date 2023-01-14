import { Text, View } from 'react-native';
import { Badge } from '../Badge';

import { styles } from './styles';

type TasksCompletedProps = {
  numberOfTasks: number;
}

export function TasksCompleted({ numberOfTasks }: TasksCompletedProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Concluídas</Text>

      <Badge title={numberOfTasks.toString()} />
    </View>
  );
}