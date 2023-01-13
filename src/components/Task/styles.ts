import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: THEME.COLORS.GRAY_500,

    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 12,
    marginBottom: 8,

    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_400,

    // to IOS
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.06)',

    // to android
    elevation: 8,

    flexDirection: 'row',
    alignItems: 'center'
  },

  description: {
    flex: 1,
    marginHorizontal: 8,

    color: THEME.COLORS.GRAY_100,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,

    lineHeight: 20,
  }
});