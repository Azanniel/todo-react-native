import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: 16,

    borderTopWidth: 1,
    borderTopColor: THEME.COLORS.GRAY_400,
    borderRadius: 8,
    
    marginTop: 20
  },

  icon: {
    marginBottom: 16
  },

  strong: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.GRAY_300,
    textAlign: 'center'
  },

  title: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.GRAY_300,
    textAlign: 'center'
  }

});