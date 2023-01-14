import { Text, View } from 'react-native';

import { Checkbox } from '../Checkbox';
import { TrashButton } from '../TrashButton';

import { TaskDTO } from '../../dtos/TaskDto';

import { styles } from './styles';

interface TaskProps {
  data: TaskDTO
}

export function Task({ data }: TaskProps) {
  return (
    <View style={styles.container}>
      <Checkbox />
      
      <Text style={styles.description}>
        {data.title}
      </Text>

      <TrashButton />
    </View>
  );
}