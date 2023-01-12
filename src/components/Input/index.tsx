import { TextInput } from 'react-native';

import { styles } from './styles';
import { THEME } from '../../theme';

export function Input() {
  return (
    <TextInput 
      style={styles.input}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={THEME.COLORS.GRAY_300}
    />
  );
}