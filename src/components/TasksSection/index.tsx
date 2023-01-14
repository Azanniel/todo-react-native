import { FlatList, View } from 'react-native';

import { TasksCreated } from '../TasksCreated';
import { TasksCompleted } from '../TasksCompleted';
import { TasksEmptyList } from '../TasksEmptyList';
import { Task } from '../Task';

import { TaskDTO } from '../../dtos/TaskDto';

import { styles } from './styles';

type TasksSectionProps = {
  tasks: TaskDTO[];
  onChangeState: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function TasksSection({ 
  tasks, onChangeState, onDelete
}: TasksSectionProps) {
  const numberOfTasksCreated = tasks.length;
  const numberOfTasksCompleted = tasks.reduce((prev, current) => {
    return current.isComplete ? prev + 1 : prev;
  }, 0);

  const tasksCompleted = tasks.filter(task => task.isComplete);
  const tasksIncomplete = tasks.filter(task => task.isComplete === false);
  const tasksInOrderOfState = [...tasksIncomplete, ...tasksCompleted];

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <TasksCreated numberOfTasks={numberOfTasksCreated} />

        <TasksCompleted numberOfTasks={numberOfTasksCompleted} />
      </View>

      <FlatList
        data={tasksInOrderOfState}
        keyExtractor={task => task.id}
        renderItem={({item}) => (
          <Task 
            data={item}
            onChangeState={onChangeState}
            onDelete={onDelete}
          />
        )}
        ListEmptyComponent={TasksEmptyList}
        style={styles.list}
        contentContainerStyle={styles.contentList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}