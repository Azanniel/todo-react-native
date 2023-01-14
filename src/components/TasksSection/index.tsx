import { FlatList, View } from 'react-native';

import { TasksCreated } from '../TasksCreated';
import { TasksCompleted } from '../TasksCompleted';
import { TasksEmptyList } from '../TasksEmptyList';
import { Task } from '../Task';

import { TaskDTO } from '../../dtos/TaskDto';

import { styles } from './styles';

type TasksSectionProps = {
  tasks: TaskDTO[]
}

export function TasksSection({ tasks }: TasksSectionProps) {
  const numberOfTasksCreated = tasks.length;
  const numberOfTasksCompleted = tasks.reduce((prev, current) => {
    return current.isComplete ? prev + 1 : prev;
  }, 0);

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <TasksCreated numberOfTasks={numberOfTasksCreated} />

        <TasksCompleted numberOfTasks={numberOfTasksCompleted} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={task => task.id}
        renderItem={({item}) => (
          <Task data={item} />
        )}
        style={styles.list}
        contentContainerStyle={styles.contentList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}