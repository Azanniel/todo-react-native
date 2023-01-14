import { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';
import { THEME } from '../../theme';

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  
  function handleFocusInput() {
    setIsFocused(true);
  }

  function handleBlurInput() {
    setIsFocused(false);
  }

  return (
    <TextInput
      style={[styles.input, isFocused && styles.focused]}
      placeholderTextColor={THEME.COLORS.GRAY_300}
      selectionColor={THEME.COLORS.PURPLE_DARK}
      onFocus={handleFocusInput}
      onBlur={handleBlurInput}
      {...rest}
    />
  );
}