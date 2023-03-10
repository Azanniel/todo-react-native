import { useState } from 'react';
import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';

type TrashButtonProps = {
  onPress: () => void;
}

export function TrashButton({ onPress }: TrashButtonProps) {
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
        name='trash-2' 
        size={14} 
        color={isOnHover ? THEME.COLORS.DANGER : THEME.COLORS.GRAY_300}
      />
    </Pressable>
  );
}