import { View } from 'react-native';
import { TasksCompleted } from '../TasksCompleted';

import { TasksCreated } from '../TasksCreated';
import { TasksEmptyList } from '../TasksEmptyList';

import { styles } from './styles';

export function TasksSection() {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <TasksCreated />
        <TasksCompleted />
      </View>

      <TasksEmptyList />
    </View>
  );
}