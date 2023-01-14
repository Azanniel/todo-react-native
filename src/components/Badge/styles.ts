import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 2,
    paddingHorizontal: 8,

    backgroundColor: THEME.COLORS.GRAY_400,
    borderRadius: 999
  },

  title: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.GRAY_200
  }
});