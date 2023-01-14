import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: THEME.COLORS.GRAY_500,

    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_700,

    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.GRAY_100,
    lineHeight: 22
  },

  focused: {
    borderColor: THEME.COLORS.PURPLE_DARK
  }
});