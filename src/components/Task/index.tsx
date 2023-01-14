import { Text, View } from 'react-native';

import { Checkbox } from '../Checkbox';
import { TrashButton } from '../TrashButton';

import { TaskDTO } from '../../dtos/TaskDto';

import { styles } from './styles';

interface TaskProps {
  data: TaskDTO;
  onChangeState: (id: string) => void;
  onDelete: (id: string) => void;
}

export function Task({ data, onChangeState, onDelete }: TaskProps) {
  const isTaskCompleted = data.isComplete;

  function handleToggleState() {
    onChangeState(data.id);
  }

  function handleDeleteTask() {
    onDelete(data.id);
  }

  return (
    <View style={styles.container}>
      <Checkbox checked={isTaskCompleted} onChange={handleToggleState} />
      
      <Text style={[styles.description, isTaskCompleted && styles.strikethrough]}>
        {data.title}
      </Text>

      <TrashButton onPress={handleDeleteTask} />
    </View>
  );
}