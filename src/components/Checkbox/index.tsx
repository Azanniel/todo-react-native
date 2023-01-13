import { Pressable, View } from 'react-native';

import { styles } from './styles';

export function Checkbox() {
  return (
    <Pressable style={styles.container}>
      <View style={styles.checkbox}></View>
    </Pressable>
  );
}