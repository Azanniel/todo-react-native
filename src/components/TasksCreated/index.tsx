import { Text, View } from 'react-native';

import { Badge } from '../Badge';

import { styles } from './styles';

type TasksCreatedProps = {
  numberOfTasks: number;
}

export function TasksCreated({ numberOfTasks }: TasksCreatedProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criadas</Text>
      
      <Badge title={numberOfTasks.toString()} />
    </View>
  );
}