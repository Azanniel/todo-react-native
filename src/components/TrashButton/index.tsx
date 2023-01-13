import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';

export function TrashButton() {
  return (
    <Pressable style={styles.container}>
      <Feather 
        name='trash-2' 
        size={14} 
        color={THEME.COLORS.GRAY_300}
      />
    </Pressable>
  );
}