import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 52,
    height: 52,
    backgroundColor: THEME.COLORS.BLUE_DARK,

    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },

  hover: {
    backgroundColor: THEME.COLORS.BLUE
  }
});