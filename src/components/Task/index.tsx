import { Text, View } from 'react-native';

import { Checkbox } from '../Checkbox';
import { TrashButton } from '../TrashButton';

import { TaskDTO } from '../../dtos/TaskDto';

import { styles } from './styles';

interface TaskProps {
  data: TaskDTO;
  onDelete: (id: string) => void;
}

export function Task({ data, onDelete }: TaskProps) {
  const isTaskCompleted = data.isComplete;

  function handleDeleteTask() {
    onDelete(data.id);
  }

  return (
    <View style={styles.container}>
      <Checkbox checked={isTaskCompleted} />
      
      <Text style={[styles.description, isTaskCompleted && styles.strikethrough]}>
        {data.title}
      </Text>

      <TrashButton onPress={handleDeleteTask} />
    </View>
  );
}