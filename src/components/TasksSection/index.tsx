import { View } from 'react-native';

import { TasksCreated } from '../TasksCreated';
import { TasksCompleted } from '../TasksCompleted';
import { TasksEmptyList } from '../TasksEmptyList';
import { Task } from '../Task';

import { styles } from './styles';

export function TasksSection() {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <TasksCreated />
        <TasksCompleted />
      </View>

      {/* <TasksEmptyList /> */}
      <Task />
    </View>
  );
}