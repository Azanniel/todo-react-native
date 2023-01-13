import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,

    padding: 3
  },

  checkbox: {
    backgroundColor: 'transparent',

    flex: 1,
    
    borderWidth: 2,
    borderColor: THEME.COLORS.BLUE,
    borderRadius: 24/2
  }
});