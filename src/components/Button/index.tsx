import { useState } from 'react';
import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';

type ButtonProps = {
  onPress: () => void;
}

export function Button({ onPress }: ButtonProps) {
  const [isOnHover, setIsOnHover] = useState(false);
  
  function handlePressIn() {
    setIsOnHover(true);
  }

  function handlePressOut() {
    setIsOnHover(false);
  }
  
  return (
    <Pressable 
      style={[styles.container, isOnHover && styles.hover]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <Feather 
        name='plus-circle' 
        size={16} 
        color={THEME.COLORS.GRAY_100}
      />
    </Pressable>
  );
}