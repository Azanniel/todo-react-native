import { Text, View } from 'react-native';
import { Checkbox } from '../Checkbox';
import { TrashButton } from '../TrashButton';

import { styles } from './styles';

export function Task() {
  return (
    <View style={styles.container}>
      <Checkbox />
      
      <Text style={styles.description}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>

      <TrashButton />
    </View>
  );
}