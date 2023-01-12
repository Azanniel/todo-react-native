import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';

export function Button() {
  return (
    <TouchableOpacity style={styles.container}>
      <Feather name='plus-circle' size={16} color={THEME.COLORS.GRAY_100} />
    </TouchableOpacity>
  );
}