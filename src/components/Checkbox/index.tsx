import { useState } from 'react';
import { Pressable, View } from 'react-native';

import { styles } from './styles';

export function Checkbox() {
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
    >
      <View 
        style={[
          styles.checkboxUnchecked,
          isOnHover && styles.checkboxUncheckedHover
        ]}
      />
    </Pressable>
  );
}