import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 70,
    alignItems: 'center',
    backgroundColor: THEME.COLORS.GRAY_700
  },

  image: {
    height: 32,
    width: 110,
    resizeMode: 'contain',
  }
});