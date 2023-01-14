import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4
  },

  hover: {
    backgroundColor: THEME.COLORS.GRAY_400
  }
});