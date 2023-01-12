import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 16,
    backgroundColor: THEME.COLORS.GRAY_500,

    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_700,

    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.GRAY_100,
    lineHeight: 1.4
  }
});