import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_600
  },

  form: {
    width: '100%',
    paddingHorizontal: 24,

    flexDirection: 'row',
    alignItems: 'stretch',

    // padding top + padding bottom + border width
    marginTop: -1 * (12 + 12 + 2),
    marginBottom: 32
  },

  wrapperButton: {
    marginLeft: 4
  },

  wrapperActivityIndicator: {
    justifyContent: 'center',
    marginHorizontal: 24
  }
});
