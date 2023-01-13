import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';

export function TasksEmptyList() {
  return (
    <View style={styles.container}>

      <Ionicons 
        size={56}
        style={styles.icon}
        name="document-text-outline" 
        color={THEME.COLORS.GRAY_300}
      />

      <Text style={styles.strong}>
        Você ainda não tem tarefas cadastradas
      </Text>
      
      <Text style={styles.title}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}