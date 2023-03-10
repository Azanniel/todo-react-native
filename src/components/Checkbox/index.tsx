import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';

type CheckboxProps = {
  checked?: boolean;
  onChange: () => void;
}

export function Checkbox({ checked = false, onChange }: CheckboxProps) {
  const [isOnHover, setIsOnHover] = useState(false);

  function handlePressIn() {
    setIsOnHover(true);
  }

  function handlePressOut() {
    setIsOnHover(false);
  }

  return (
    <Pressable
      style={styles.container}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onChange}
      hitSlop={5}
    >
      {checked ? (
        <View
          style={[
            styles.checkboxChecked,
            isOnHover && styles.checkboxCheckedHover
          ]}
        >
          <Feather 
            name="check" 
            size={10}
            color={THEME.COLORS.GRAY_100}
          />
        </View>
      ) : (
        <View
          style={[
            styles.checkboxUnchecked,
            isOnHover && styles.checkboxUncheckedHover
          ]}
        />
      )}
    </Pressable>
  );
}