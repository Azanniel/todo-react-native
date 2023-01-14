import { Text, View } from 'react-native';

import { styles } from './styles';

type BadgeProps = {
  title: string
}

export function Badge({ title }: BadgeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}